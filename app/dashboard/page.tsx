import { redirect } from "next/navigation";
import Link from "next/link";
import FadeIn from "@/components/fadein";
import DashboardContent from "@/components/DashboardContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabaseServer } from "@/lib/supabase/server";

export default async function DashboardPage() {
	const supabase = await supabaseServer();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) redirect("/auth?next=/dashboard");

	const { data: subscription } = await supabase
		.from("subscription")
		.select("customer_id, end_at, subscription_id")
		.eq("email", user.email ?? "")
		.maybeSingle();

	if (!subscription?.subscription_id) redirect("/");

	return (
		<FadeIn>
			<div className="container max-w-6xl mx-auto px-4 py-12">
				<Card className="mb-8 bg-background/50 backdrop-blur-sm border-none shadow-lg">
					<CardHeader className="text-center">
						<CardTitle className="text-3xl font-bold">Your Dashboard</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-lg text-center text-muted-foreground">
							Manage your subscription and explore your account details.
						</p>
					</CardContent>
				</Card>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="md:col-span-2 bg-blue-800 rounded-lg p-6">
						<h2 className="text-2xl font-semibold mb-4 text-center text-white">
							Subscription Details
						</h2>
						<DashboardContent user={{ subscription }} />
					</div>
					<div className="bg-blue-800 rounded-lg p-6">
						<h2 className="text-2xl font-semibold mb-4 text-center text-white">
							Quick Actions
						</h2>
						<div className="flex flex-col space-y-4">
							<Link
								href="/documentation"
								className="bg-white text-blue-800 font-semibold py-2 px-4 rounded hover:bg-blue-100 transition-colors duration-200 text-center"
							>
								Documentation
							</Link>
							{/* TODO: replace with your own Discord invite URL */}
							<a
								href="https://discord.gg/your-invite"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-200 text-center"
							>
								Join our Discord
							</a>
						</div>
					</div>
				</div>
			</div>
		</FadeIn>
	);
}
