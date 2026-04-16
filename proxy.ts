import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { protectedPaths } from "./lib/constant";

type CookieToSet = { name: string; value: string; options: CookieOptions };

export async function proxy(request: NextRequest) {
	let response = NextResponse.next({ request });

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll();
				},
				setAll(cookiesToSet: CookieToSet[]) {
					for (const { name, value } of cookiesToSet) {
						request.cookies.set(name, value);
					}
					response = NextResponse.next({ request });
					for (const { name, value, options } of cookiesToSet) {
						response.cookies.set(name, value, options);
					}
				},
			},
		}
	);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const url = new URL(request.url);
	const path = url.pathname;

	if (user) {
		if (path === "/auth") {
			return NextResponse.redirect(new URL("/", url.origin));
		}
	} else if (protectedPaths.includes(path)) {
		const redirectUrl = new URL("/auth", url.origin);
		redirectUrl.searchParams.set("next", path);
		return NextResponse.redirect(redirectUrl);
	}

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except:
		 * - _next/static, _next/image, favicon, robots, sitemap, public assets
		 * - API routes (handled directly; webhook needs raw body and no auth refresh)
		 */
		"/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api/webhook|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
	],
};
