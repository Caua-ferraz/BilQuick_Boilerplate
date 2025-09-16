import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../types/supabase";

export function supabaseServer() {
        const cookieStore = cookies();

        const safeCookieOperation = (operation: () => void) => {
                try {
                        operation();
                } catch (error) {
                        if (
                                !(
                                        error instanceof Error &&
                                        error.message.includes(
                                                "Cookies can only be modified in a Server Action or Route Handler"
                                        )
                                )
                        ) {
                                throw error;
                        }
                }
        };

        return createServerClient<Database>(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                {
                        cookies: {
                                get(name: string) {
                                        return cookieStore.get(name)?.value;
                                },
                                set(name: string, value: string, options: CookieOptions) {
                                        safeCookieOperation(() =>
                                                cookieStore.set({
                                                        name,
                                                        value,
                                                        ...options,
                                                })
                                        );
                                },
                                remove(name: string, options: CookieOptions) {
                                        safeCookieOperation(() =>
                                                cookieStore.set({
                                                        name,
                                                        value: "",
                                                        ...options,
                                                        maxAge: 0,
                                                })
                                        );
                                },
                        },
                }
        );
}
