import { z } from "zod";

const serverSchema = z.object({
	STRIPE_SK: z.string().startsWith("sk_"),
	STRIPE_WEBHOOK_SECRET: z.string().startsWith("whsec_"),
	SUPABASE_SERVICE_ROLE_KEY: z.string().min(20),
	SITE_URL: z.url(),
	AFTER_BUY_URL: z.url().optional(),
});

const clientSchema = z.object({
	NEXT_PUBLIC_SUPABASE_URL: z.url(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20),
	NEXT_PUBLIC_STRIPE_PRICE_ID_PRO: z.string().startsWith("price_"),
});

const clientRaw = {
	NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
	NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	NEXT_PUBLIC_STRIPE_PRICE_ID_PRO: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO,
};

export const clientEnv = clientSchema.parse(clientRaw);

export const serverEnv =
	typeof window === "undefined"
		? serverSchema.parse({
				STRIPE_SK: process.env.STRIPE_SK,
				STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
				SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
				SITE_URL: process.env.SITE_URL,
				AFTER_BUY_URL: process.env.AFTER_BUY_URL,
		  })
		: (null as unknown as z.infer<typeof serverSchema>);
