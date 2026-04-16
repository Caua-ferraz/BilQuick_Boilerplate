import { redirect } from "next/navigation";
import Link from "next/link";
import fs from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import { supabaseServer } from "@/lib/supabase/server";
import FadeIn from "@/components/fadein";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DOCS_DIR = path.join(process.cwd(), "public", "docs");
const SLUG_RE = /^[a-z0-9_-]+$/i;

async function listDocSlugs(): Promise<string[]> {
	try {
		const entries = await fs.readdir(DOCS_DIR);
		return entries
			.filter((f) => f.endsWith(".md"))
			.map((f) => f.replace(/\.md$/, ""))
			.filter((s) => SLUG_RE.test(s))
			.sort();
	} catch {
		return [];
	}
}

async function readDoc(slug: string): Promise<string | null> {
	if (!SLUG_RE.test(slug)) return null;
	const filePath = path.join(DOCS_DIR, `${slug}.md`);
	// Defense in depth: ensure the resolved path is still inside DOCS_DIR.
	const resolved = path.resolve(filePath);
	if (!resolved.startsWith(path.resolve(DOCS_DIR) + path.sep)) return null;
	try {
		return await fs.readFile(resolved, "utf8");
	} catch {
		return null;
	}
}

export default async function DocumentationPage({
	searchParams,
}: {
	searchParams: Promise<{ doc?: string }>;
}) {
	const supabase = await supabaseServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	if (!user) redirect("/auth?next=/documentation");

	const { data: sub } = await supabase
		.from("subscription")
		.select("subscription_id")
		.eq("email", user.email ?? "")
		.maybeSingle();
	if (!sub?.subscription_id) redirect("/");

	const [slugs, params] = await Promise.all([listDocSlugs(), searchParams]);
	const requested = params.doc;
	const selected =
		requested && slugs.includes(requested) ? requested : slugs[0] ?? null;
	const content = selected ? await readDoc(selected) : null;

	return (
		<FadeIn>
			<div className="flex h-screen bg-gray-900">
				<Card className="w-64 h-full rounded-none border-r border-gray-700 bg-gray-800">
					<CardHeader>
						<CardTitle className="text-white">Documentation</CardTitle>
					</CardHeader>
					<CardContent>
						<nav>
							<ul className="space-y-2">
								{slugs.map((slug) => (
									<li key={slug}>
										<Link
											href={`/documentation?doc=${slug}`}
											className={`block w-full text-left py-2 px-4 rounded transition-colors ${
												selected === slug
													? "bg-blue-600 text-white font-medium"
													: "text-gray-300 hover:bg-gray-700"
											}`}
										>
											{slug.charAt(0).toUpperCase() +
												slug.slice(1).replace(/_/g, " ")}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</CardContent>
				</Card>

				<main className="flex-1 overflow-auto p-8 bg-gray-900 text-white">
					{content ? (
						<article className="prose prose-invert max-w-none">
							<Markdown
								remarkPlugins={[remarkGfm]}
								rehypePlugins={[rehypeSanitize]}
							>
								{content}
							</Markdown>
						</article>
					) : (
						<div>
							<h1 className="text-3xl font-bold mb-6">Documentation</h1>
							<p>No documentation available.</p>
						</div>
					)}
				</main>
			</div>
		</FadeIn>
	);
}
