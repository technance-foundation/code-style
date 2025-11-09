import nextConfig from "../../src/eslint/next.js";

export default [
	...nextConfig,
	{
		ignores: ["node_modules/**", "dist/**", "tests/**"],
	},
];
