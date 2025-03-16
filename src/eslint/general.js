/// <reference types="./types.d.ts" />
//@ts-check

import * as path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import nodePlugin from "eslint-plugin-n";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

import { javascriptRules, typescriptRules, nodeRules } from "./rules/index.js";

export default tseslint.config(
    includeIgnoreFile(path.join(import.meta.dirname, "./.gitignore")),
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
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
    },
    {
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: prettierPlugin,
            import: importPlugin,
            node: nodePlugin,
        },
        rules: {
            ...typescriptRules,
            ...javascriptRules,
            ...nodeRules,
        },
    },
);
