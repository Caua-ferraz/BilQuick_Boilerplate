"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { protectedPaths } from "@/lib/constant";
import { manageBilling } from "@/lib/actions/stripe";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Profile() {
	const { isFetching, data } = useUser();
	const queryClient = useQueryClient();
	const router = useRouter();
	const pathname = usePathname();

	if (isFetching) {
		return <></>;
	}

	const handleLogout = async () => {
		const supabase = supabaseBrowser();
		queryClient.clear();
		await supabase.auth.signOut();
		router.refresh();
		if (protectedPaths.includes(pathname)) {
			router.replace("/auth?next=" + pathname);
		}
	};

	const handleBilling = async () => {
		const result = await manageBilling();
		if (!result.ok) {
			console.error(result.error);
			return;
		}
		window.location.href = result.url;
	};

	const isSubscriber = !!data?.subscription?.subscription_id;

	return (
		<div>
			{!data?.id ? (
				<Link href="/auth" className="animate-fade">
					<Button variant="outline">SignIn</Button>
				</Link>
			) : (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<>
							{data?.image_url ? (
								<Image
									src={data.image_url || ""}
									alt={data.display_name || ""}
									width={50}
									height={50}
									className="rounded-full animate-fade ring-2 cursor-pointer"
								/>
							) : (
								<div className="h-[50px] w-[50px] flex items-center justify-center ring-2 rounded-full text-2xl font-bold cursor-pointer">
									<h1>{data.email[0]}</h1>
								</div>
							)}
						</>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						{isSubscriber && (
							<>
								<DropdownMenuItem>
									<Link href="/dashboard">Dashboard</Link>
								</DropdownMenuItem>
								<DropdownMenuItem onSelect={handleBilling}>
									Billing
								</DropdownMenuItem>
							</>
						)}
						<DropdownMenuItem onClick={handleLogout}>
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
		</div>
	);
}
