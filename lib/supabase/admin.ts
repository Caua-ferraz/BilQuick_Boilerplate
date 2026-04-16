import "server-only";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/supabase";
import { serverEnv } from "../env";

let cached: ReturnType<typeof createClient<Database>> | null = null;

export function supabaseAdmin() {
	if (cached) return cached;
	cached = createClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		serverEnv.SUPABASE_SERVICE_ROLE_KEY,
		{
			auth: { autoRefreshToken: false, persistSession: false },
		}
	);
	return cached;
}
