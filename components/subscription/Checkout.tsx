"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useUser from "@/hooks/useUser";
import { checkout } from "@/lib/actions/stripe";

interface CheckoutProps {
	priceId: string;
}

export default function Checkout({ priceId }: CheckoutProps) {
	const { data: user } = useUser();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [error, setError] = useState<string | null>(null);

	const onClick = () => {
		setError(null);

		if (!user?.id) {
			router.push(`/auth?next=${encodeURIComponent(location.pathname)}`);
			return;
		}

		startTransition(async () => {
			const result = await checkout(
				priceId,
				location.origin + location.pathname
			);
			if (!result.ok) {
				setError(result.error);
				return;
			}
			// Stripe deprecated stripe.redirectToCheckout in @stripe/stripe-js v9.
			// The session URL is the recommended path.
			window.location.href = result.url;
		});
	};

	return (
		<div className="space-y-2">
			<Button
				className="w-full flex items-center gap-2"
				onClick={onClick}
				disabled={isPending}
			>
				Get started
				<AiOutlineLoading3Quarters
					className={cn("animate-spin", isPending ? "block" : "hidden")}
				/>
			</Button>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
}
