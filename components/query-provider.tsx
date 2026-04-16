"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, type ReactNode } from "react";

const DEVTOOLS_ENABLED =
	process.env.NEXT_PUBLIC_ENABLE_REACT_QUERY_DEVTOOLS === "true";

export default function QueryProvider({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// 1 min fresh, 5 min cached — covers most nav without hammering the API.
						staleTime: 60 * 1000,
						gcTime: 5 * 60 * 1000,
						refetchOnWindowFocus: false,
						retry: 1,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{DEVTOOLS_ENABLED && <ReactQueryDevtools initialIsOpen={false} />}
		</QueryClientProvider>
	);
}
