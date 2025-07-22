/// <reference types="./types.d.ts" />
//@ts-check

import * as path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginSortExportAll from "eslint-plugin-sort-export-all";
import nodePlugin from "eslint-plugin-n";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import jsoncPlugin from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import fs from "node:fs";

import { javascriptRules, typescriptRules } from "./rules/index.js";

const gitignorePath = path.resolve(process.cwd(), ".gitignore");

export default tseslint.config(
    fs.existsSync(gitignorePath) ? includeIgnoreFile(gitignorePath) : {},
    {
        ignores: [
            "*.min.*",
            "*.d.ts",
            "CHANGELOG.md",
            "dist/**",
            ".next/**",
            "LICENSE*",
            "output/**",
            "coverage/**",
            "temp/**",
            "build/**",
            "public/assets/**",
            "pnpm-lock.yaml",
            "yarn.lock",
            "package-lock.json",
            "__snapshots__/**",
        ],
    },
    prettierPlugin,
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
        ignores: ["package.json"],
        plugins: {
            "sort-export-all": eslintPluginSortExportAll,
            "@typescript-eslint": typescriptEslintPlugin,
            import: importPlugin,
            node: nodePlugin,
        },
        rules: {
            ...typescriptRules,
            ...javascriptRules,
        },
    },
    {
        files: ["package.json"],
        languageOptions: {
            parser: jsoncParser,
        },
        plugins: {
            jsonc: jsoncPlugin,
        },
        rules: {
            "@typescript-eslint/naming-convention": "off",
            "jsonc/sort-keys": [
                "error",
                {
                    pathPattern: "^$",
                    order: [
                        "publisher",
                        "name",
                        "displayName",
                        "description",
                        "version",
                        "private",
                        "engines",
                        "main",
                        "type",
                        "files",
                        "bin",
                        "exports",
                        "imports",
                        "scripts",
                        "devDependencies",
                        "dependencies",
                        "optionalDependencies",
                        "peerDependencies",
                        "peerDependenciesMeta",
                        "packageManager",
                        "author",
                        "license",
                        "funding",
                        "homepage",
                        "repository",
                        "bugs",
                        "keywords",
                        "categories",
                        "sideEffects",
                        "types",
                        "typesVersions",
                        "icon",
                        "activationEvents",
                        "contributes",
                        "pnpm",
                        "overrides",
                        "resolutions",
                        "husky",
                        "simple-git-hooks",
                        "lint-staged",
                        "eslintConfig",
                        "eslintIgnore",
                        "prettier",
                        "commitlint",
                        "publishConfig",
                        "np",
                        "c8",
                    ],
                },
            ],
        },
    },
);
