"use client";
import { useEffect } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const userQueryKey = ["user"] as const;

export default function useUser() {
	const queryClient = useQueryClient();

	// Invalidate the cache when auth state changes (login/logout/refresh).
	useEffect(() => {
		const supabase = supabaseBrowser();
		const { data } = supabase.auth.onAuthStateChange(() => {
			queryClient.invalidateQueries({ queryKey: userQueryKey });
		});
		return () => data.subscription.unsubscribe();
	}, [queryClient]);

	return useQuery({
		queryKey: userQueryKey,
		queryFn: async () => {
			const supabase = supabaseBrowser();

			// getUser() validates the JWT with Supabase — safer than getSession()
			// which only reads from the local cookie.
			const { data: userRes, error: userErr } = await supabase.auth.getUser();
			if (userErr || !userRes.user) return null;

			const { data: profile } = await supabase
				.from("profiles")
				.select("id, created_at, display_name, email, image_url")
				.eq("id", userRes.user.id)
				.single();
			if (!profile?.email) return null;

			const { data: subscription } = await supabase
				.from("subscription")
				.select("created_at, customer_id, email, end_at, subscription_id")
				.eq("email", profile.email)
				.maybeSingle();

			return { ...profile, subscription };
		},
	});
}
