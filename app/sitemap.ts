import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = process.env.SITE_URL ?? "http://localhost:3000";
	const now = new Date();

	// Only public, indexable routes. Auth-gated pages (/dashboard, /profile,
	// /success, /documentation, /subscription) deliberately excluded.
	const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
		{ path: "/", priority: 1.0, changeFrequency: "weekly" },
		{ path: "/auth", priority: 0.6, changeFrequency: "monthly" },
		{ path: "/terms", priority: 0.5, changeFrequency: "yearly" },
		{ path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
	];

	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${base}${path}`,
		lastModified: now,
		changeFrequency,
		priority,
	}));
}
