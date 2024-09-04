"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * QueryProvider Component
 * 
 * This component sets up the React Query client for the application.
 * It provides the QueryClientProvider and ReactQueryDevtools to its children.
 * 
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The child components to be wrapped
 */
export default function QueryProvider({ children }: { children: ReactNode }) {
	// Create a new QueryClient instance with custom options
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						// Set the default stale time for all queries to Infinity
						// This means data will never be considered stale by default
						staleTime: Infinity,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{/* ReactQueryDevtools for debugging (hidden by default) */}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

// Customization options:

// 1. Adjust stale time
// You can change the staleTime value to suit your needs:
// staleTime: 5 * 60 * 1000, // 5 minutes

// 2. Add more default options
// You can add more default options to the QueryClient:
// defaultOptions: {
//   queries: {
//     staleTime: Infinity,
//     refetchOnWindowFocus: false,
//     retry: 3,
//   },
// },

// 3. Enable ReactQueryDevtools by default
// Change initialIsOpen to true:
// <ReactQueryDevtools initialIsOpen={true} />

// 4. Remove ReactQueryDevtools in production
// You can conditionally render ReactQueryDevtools:
// {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}

// 5. Custom QueryClient creation
// If you need more control over the QueryClient creation, you can move it outside the component:
// const queryClient = new QueryClient({ ... });
// export default function QueryProvider({ children }: { children: ReactNode }) {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// }
