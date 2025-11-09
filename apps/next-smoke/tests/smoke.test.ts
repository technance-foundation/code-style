import { execSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Helper function to run a command and capture its output
 * @param command - The command to run
 * @param filePath - The file path to check
 * @returns Object with success flag and output
 */
function runCommand(command: string, filePath: string): { success: boolean; output: string } {
	try {
		const output = execSync(`${command} ${filePath}`, {
			cwd: path.resolve(__dirname, ".."),
			encoding: "utf-8",
			stdio: "pipe",
		});
		return { success: true, output };
	} catch (error) {
		const err = error as { stdout?: string; stderr?: string; message: string };
		return {
			success: false,
			output: err.stdout || err.stderr || err.message,
		};
	}
}

describe("Smoke Tests for Code Style Tools", () => {
	describe("Biome", () => {
		it("✅ should pass on good.ts", () => {
			const result = runCommand(
				"pnpm biome check --formatter-enabled=false",
				"src/biome/good.ts",
			);
			expect(result.success).toBe(true);
		});

		it("❌ should fail on bad.ts", () => {
			const result = runCommand(
				"pnpm biome check --formatter-enabled=false",
				"src/biome/bad.ts",
			);
			expect(result.success).toBe(false);
			expect(result.output).toContain("error");
		});
	});

	describe("ESLint", () => {
		it("✅ should pass on good.tsx", () => {
			const result = runCommand("pnpm eslint", "src/eslint/good.tsx");
			expect(result.success).toBe(true);
		});

		it("❌ should fail on bad.tsx", () => {
			const result = runCommand("pnpm eslint", "src/eslint/bad.tsx");
			expect(result.success).toBe(false);
			expect(result.output).toMatch(/error|warning/i);
		});
	});

	describe("Prettier", () => {
		it("✅ should pass on good.js", () => {
			const result = runCommand("pnpm prettier --check", "src/prettier/good.js");
			expect(result.success).toBe(true);
		});

		it("❌ should fail on bad.js", () => {
			const result = runCommand("pnpm prettier --check", "src/prettier/bad.js");
			expect(result.success).toBe(false);
			// Prettier outputs either "Code style issues found" or fails with exit code
			expect(result.output.length).toBeGreaterThan(0);
		});
	});

	describe("Integration - All tools together", () => {
		it("should correctly identify all good files", () => {
			const biomeGood = runCommand(
				"pnpm biome check --formatter-enabled=false",
				"src/biome/good.ts",
			);
			const eslintGood = runCommand("pnpm eslint", "src/eslint/good.tsx");
			const prettierGood = runCommand("pnpm prettier --check", "src/prettier/good.js");

			expect(biomeGood.success).toBe(true);
			expect(eslintGood.success).toBe(true);
			expect(prettierGood.success).toBe(true);
		});

		it("should correctly identify all bad files", () => {
			const biomeBad = runCommand(
				"pnpm biome check --formatter-enabled=false",
				"src/biome/bad.ts",
			);
			const eslintBad = runCommand("pnpm eslint", "src/eslint/bad.tsx");
			const prettierBad = runCommand("pnpm prettier --check", "src/prettier/bad.js");

			expect(biomeBad.success).toBe(false);
			expect(eslintBad.success).toBe(false);
			expect(prettierBad.success).toBe(false);
		});
	});
});
