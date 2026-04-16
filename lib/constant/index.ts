// Routes that require an authenticated user. The proxy redirects anonymous
// visitors to /auth. Page components apply additional checks (subscription
// status, etc.) for defense in depth.
export const protectedPaths: string[] = [
	"/dashboard",
	"/profile",
	"/success",
	"/documentation",
];
