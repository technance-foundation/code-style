import nextConfig from "../../packages/code-style/src/eslint/next.js";

export default [
	...nextConfig,
	{
		ignores: ["node_modules/**", "dist/**", "tests/**"],
	},
];
