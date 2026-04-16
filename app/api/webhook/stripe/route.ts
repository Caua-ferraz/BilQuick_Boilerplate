import Stripe from "stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/env";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(serverEnv.STRIPE_SK);

export async function POST(req: Request) {
	const sig = req.headers.get("stripe-signature");
	if (!sig) {
		return Response.json({ error: "Missing stripe-signature header" }, { status: 400 });
	}

	const rawBody = await req.text();

	let event: Stripe.Event;
	try {
		event = stripe.webhooks.constructEvent(rawBody, sig, serverEnv.STRIPE_WEBHOOK_SECRET);
	} catch (err) {
		const message = err instanceof Error ? err.message : "Invalid signature";
		return Response.json({ error: `Webhook signature verification failed: ${message}` }, { status: 400 });
	}

	const db = supabaseAdmin();

	// Idempotency: Stripe may retry; skip events we've already processed.
	const { data: existing } = await db
		.from("stripe_events")
		.select("id")
		.eq("id", event.id)
		.maybeSingle();
	if (existing) {
		return Response.json({ received: true, duplicate: true });
	}

	try {
		switch (event.type) {
			case "invoice.payment_succeeded": {
				const invoice = event.data.object as Stripe.Invoice;
				const line = invoice.lines.data[0];
				if (!line?.period?.end) {
					throw new Error("Invoice missing period end");
				}
				const email = invoice.customer_email;
				const customer_id =
					typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id ?? null;

				// Stripe API 2025-03+: subscription id moved to parent.subscription_details.subscription
				const subRef =
					invoice.parent?.type === "subscription_details"
						? invoice.parent.subscription_details?.subscription
						: null;
				const subscription_id =
					typeof subRef === "string" ? subRef : subRef?.id ?? null;

				if (!email || !customer_id || !subscription_id) {
					// Not a subscription invoice (e.g. one-off charge) — ignore quietly.
					break;
				}

				const end_at = new Date(line.period.end * 1000).toISOString();
				const { error } = await db
					.from("subscription")
					.upsert(
						{
							email,
							end_at,
							customer_id,
							subscription_id,
							created_at: new Date().toISOString(),
						},
						{ onConflict: "email" }
					);
				if (error) throw error;
				break;
			}

			case "customer.subscription.deleted": {
				const sub = event.data.object as Stripe.Subscription;
				const { error } = await db
					.from("subscription")
					.update({ customer_id: null, subscription_id: null })
					.eq("subscription_id", sub.id);
				if (error) throw error;
				break;
			}

			default:
				// Ignore unhandled events silently — Stripe treats non-2xx as a failure.
				break;
		}

		await db.from("stripe_events").insert({ id: event.id, type: event.type });
		return Response.json({ received: true });
	} catch (err) {
		const message = err instanceof Error ? err.message : "Unknown error";
		console.error(`[stripe-webhook] ${event.type} ${event.id}: ${message}`);
		// Return 500 so Stripe retries. Do NOT mark the event as processed.
		return Response.json({ error: message }, { status: 500 });
	}
}
