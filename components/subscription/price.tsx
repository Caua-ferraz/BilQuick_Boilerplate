"use client";

import { CheckCircle2 } from "lucide-react";
import useUser from "@/hooks/useUser";
import Checkout from "./Checkout";

const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO ?? "";

const plans = [
	{
		title: "Pro",
		description:
			"Accelerate your SaaS development with our comprehensive boilerplate",
		benefits: [
			"Next.js 15 App Router",
			"Supabase auth + Postgres",
			"Stripe subscriptions",
			"Tailwind v4 design system",
			"Dark mode",
			"Type-safe end-to-end",
		],
		amount: 19.99,
		priceId: PRICE_ID,
	},
];

export default function Price() {
	const { data: user, isLoading } = useUser();

	if (isLoading) return null;

	if (user?.subscription?.customer_id) {
		return (
			<div className="text-center">
				<p className="text-lg font-medium text-orange-500">
					You are already a subscriber
				</p>
				<p className="text-md">
					Subscription ends on:{" "}
					{user.subscription.end_at
						? new Date(user.subscription.end_at).toLocaleDateString()
						: "N/A"}
				</p>
			</div>
		);
	}

	if (!PRICE_ID) {
		return (
			<p className="text-center text-sm text-red-500">
				Missing NEXT_PUBLIC_STRIPE_PRICE_ID_PRO — set it in your .env to enable
				checkout.
			</p>
		);
	}

	return (
		<div className="flex justify-center">
			<div className="max-w-md w-full">
				{plans.map((plan) => (
					<div
						key={plan.title}
						className="relative border rounded-md p-5 space-y-5"
					>
						<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
							Recommended
						</span>

						<div className="space-y-3 text-center">
							<h1 className="text-3xl font-bold">{plan.title}</h1>
							<div className="flex items-center justify-center">
								<span className="text-4xl font-bold">${plan.amount}</span>
								<span className="text-xl ml-1">/month</span>
							</div>
							<p className="text-sm text-gray-400">{plan.description}</p>
						</div>

						<ul className="space-y-3">
							{plan.benefits.map((benefit) => (
								<li key={benefit} className="flex items-center gap-2">
									<CheckCircle2 className="shrink-0" />
									<span className="text-sm text-gray-400">{benefit}</span>
								</li>
							))}
						</ul>

						<Checkout priceId={plan.priceId} />
					</div>
				))}
			</div>
		</div>
	);
}
