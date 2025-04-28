/// <reference types="./types.d.ts" />
//@ts-check

import globals from "globals";
import general from "./general.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

import { nodeRules } from "./rules/index.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...general,
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs}"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
        },
        rules: {
            ...nodeRules,
        },
    },
];
