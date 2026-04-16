"use server";
import Stripe from "stripe";
import { supabaseServer } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/env";

const stripe = new Stripe(serverEnv.STRIPE_SK);

type CheckoutResult =
	| { ok: true; url: string }
	| { ok: false; error: string };

function sameOriginOrFallback(candidate: string, fallback: string): string {
	try {
		const c = new URL(candidate);
		const f = new URL(fallback);
		if (c.origin !== f.origin) return fallback;
		return c.toString();
	} catch {
		return fallback;
	}
}

export async function checkout(
	priceId: string,
	redirectTo: string
): Promise<CheckoutResult> {
	const supabase = await supabaseServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user?.email) {
		return { ok: false, error: "Not authenticated" };
	}

	const successFallback = serverEnv.AFTER_BUY_URL ?? `${serverEnv.SITE_URL}/success`;
	const successUrl = sameOriginOrFallback(redirectTo, successFallback);

	try {
		const session = await stripe.checkout.sessions.create({
			mode: "subscription",
			success_url: successUrl,
			cancel_url: serverEnv.SITE_URL,
			customer_email: user.email,
			client_reference_id: user.id,
			line_items: [{ price: priceId, quantity: 1 }],
		});
		if (!session.url) {
			return { ok: false, error: "Stripe did not return a session URL" };
		}
		return { ok: true, url: session.url };
	} catch (err) {
		console.error("[stripe.checkout]", err);
		return { ok: false, error: "Checkout session could not be created" };
	}
}

export async function manageBilling(): Promise<
	{ ok: true; url: string } | { ok: false; error: string }
> {
	const supabase = await supabaseServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user?.email) return { ok: false, error: "Not authenticated" };

	// Look up the Stripe customer_id via the service-role client so we don't
	// trust any value sent from the browser.
	const admin = supabaseAdmin();
	const { data: sub } = await admin
		.from("subscription")
		.select("customer_id")
		.eq("email", user.email)
		.maybeSingle();

	if (!sub?.customer_id) {
		return { ok: false, error: "No active subscription found" };
	}

	try {
		const portal = await stripe.billingPortal.sessions.create({
			customer: sub.customer_id,
			return_url: serverEnv.SITE_URL,
		});
		return { ok: true, url: portal.url };
	} catch (err) {
		console.error("[stripe.manageBilling]", err);
		return { ok: false, error: "Billing portal unavailable" };
	}
}
