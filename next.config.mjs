/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
	},
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{ hostname: "lh3.googleusercontent.com", protocol: "https" },
			{ hostname: "avatars.githubusercontent.com", protocol: "https" },
			{ hostname: "api.producthunt.com", protocol: "https" },
		],
	},
	async headers() {
		const csp = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' https://js.stripe.com https://va.vercel-scripts.com",
			"style-src 'self' 'unsafe-inline'",
			"img-src 'self' data: blob: https:",
			"font-src 'self' data:",
			"connect-src 'self' https://*.supabase.co https://api.stripe.com https://va.vercel-scripts.com wss://*.supabase.co",
			"frame-src https://js.stripe.com https://hooks.stripe.com https://www.youtube.com",
			"base-uri 'self'",
			"form-action 'self' https://checkout.stripe.com https://billing.stripe.com",
			"frame-ancestors 'none'",
		].join("; ");

		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Frame-Options", value: "DENY" },
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
					{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
					{ key: "Content-Security-Policy", value: csp },
				],
			},
		];
	},
};

export default nextConfig;
