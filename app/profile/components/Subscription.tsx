"use client";
import useUser from "@/hooks/useUser";
import { Button } from "@/components/ui/button";
import { manageBilling } from "@/lib/actions/stripe";
import React from "react";

export default function Subscription() {
	const { data: user, isLoading } = useUser();
	if (isLoading) {
		return <></>;
	}

	const handleBilling = async () => {
		const result = await manageBilling();
		if (!result.ok) {
			console.error(result.error);
			return;
		}
		window.location.href = result.url;
	};
	return (
		<div className=" space-y-5">
			<h1 className=" text-3xl font-bold">Hi, {user?.display_name}</h1>
			{user?.subscription?.end_at && (
				<p>
					Your Subscription will end on{" "}
					{new Date(user?.subscription?.end_at).toDateString()}
				</p>
			)}
			{user?.subscription?.customer_id && (
				<Button onClick={handleBilling}>Cancel</Button>
			)}
		</div>
	);
}
