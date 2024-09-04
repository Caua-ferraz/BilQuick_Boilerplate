"use client";
import React from "react";
import { redirect } from "next/navigation";
import useUser from "@/app/hook/useUser";
import DashboardContent from "@/components/DashboardContent";
import FadeIn from "@/components/fadein";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
	const { data: user, isLoading } = useUser();

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
			</div>
		);
	}

	if (!user?.subscription?.subscription_id) {
		redirect("/");
	}

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
						<h2 className="text-2xl font-semibold mb-4 text-center text-white">Subscription Details</h2>
						<DashboardContent user={user} />
					</div>
					<div className="bg-blue-800 rounded-lg p-6">
						<h2 className="text-2xl font-semibold mb-4 text-center">Quick Actions</h2>
						{/* Add quick action buttons or links here */}
					</div>
				</div>
			</div>
		</FadeIn>
	);
}
