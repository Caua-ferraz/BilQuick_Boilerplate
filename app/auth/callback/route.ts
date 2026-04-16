import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

type CookieToSet = { name: string; value: string; options: CookieOptions };

function safeRedirect(next: string): string {
	// Only accept single-leading-slash, relative paths. Rejects `//evil.com`,
	// protocol-relative URLs, and anything with a scheme.
	if (typeof next !== "string") return "/";
	if (!next.startsWith("/")) return "/";
	if (next.startsWith("//") || next.startsWith("/\\")) return "/";
	try {
		const u = new URL(next, "http://placeholder.local");
		return u.pathname + u.search + u.hash;
	} catch {
		return "/";
	}
}

export async function GET(request: Request) {
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get("code");
	const next = safeRedirect(searchParams.get("next") ?? "/");

	if (!code) {
		return NextResponse.redirect(`${origin}/auth/auth-code-error`);
	}

	const cookieStore = await cookies();
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet: CookieToSet[]) {
					for (const { name, value, options } of cookiesToSet) {
						cookieStore.set(name, value, options);
					}
				},
			},
		}
	);

	const { error } = await supabase.auth.exchangeCodeForSession(code);
	if (error) {
		return NextResponse.redirect(`${origin}/auth/auth-code-error`);
	}

	return NextResponse.redirect(`${origin}${next}`);
}
