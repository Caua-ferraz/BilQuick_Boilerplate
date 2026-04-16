import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthCodeError() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4">
			<h1 className="text-3xl font-bold">Sign-in failed</h1>
			<p className="text-muted-foreground max-w-md">
				The sign-in link was invalid or has expired. Please try again.
			</p>
			<Button asChild>
				<Link href="/auth">Back to sign in</Link>
			</Button>
		</div>
	);
}
