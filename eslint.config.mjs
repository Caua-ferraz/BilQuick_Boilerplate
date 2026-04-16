import next from "eslint-config-next";

/** @type {import('eslint').Linter.Config[]} */
const config = [
	...next,
	{
		ignores: [
			".next/**",
			"node_modules/**",
			"lib/types/supabase.ts",
		],
	},
	{
		files: ["**/*.{ts,tsx}"],
		rules: {
			"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"@typescript-eslint/no-explicit-any": "warn",
		},
	},
];

export default config;
