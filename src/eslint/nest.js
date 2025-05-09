/// <reference types="./types.d.ts" />
//@ts-check

import globals from "globals";
import general from "./general.js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import eslintPluginSortExportAll from "eslint-plugin-sort-export-all";

import { nodeRules } from "./rules/index.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...general,
    {
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            import: importPlugin,
            "sort-export-all": eslintPluginSortExportAll,
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            ecmaVersion: 5,
            sourceType: "module",
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            ...nodeRules,
        },
    },
    {
        files: ["**/*.spec.ts"],
        rules: {
            /**
             * Disables the rule that prevents unsafe member access.
             * Normally, this rule warns when accessing properties on values with unknown types,
             * which helps catch potential runtime errors. However, in test files,
             * dynamic objects, mocks, or partial objects are common,
             * making this rule too restrictive for testing purposes.
             */
            "@typescript-eslint/no-unsafe-member-access": "off",

            /**
             * Disables the rule that prevents unsafe function calls.
             * Typically, this rule warns when calling a value of an unknown type as a function,
             * aiming to avoid potential runtime issues. In testing scenarios, especially with mocks
             * or dynamically created functions, this rule may hinder the flexibility needed for tests.
             */
            "@typescript-eslint/no-unsafe-call": "off",

            /**
             * Disables the rule that warns about returning values of unsafe type.
             * This rule is intended to ensure that functions do not return values with unknown or unexpected types,
             * which might lead to runtime issues. In test files, however, flexibility is often needed to simulate
             * various behaviors and edge cases, so this rule is disabled.
             */
            "@typescript-eslint/no-unsafe-return": "off",

            /**
             * Disables the rule that warns when passing arguments of unknown type to functions.
             * Typically, this rule is designed to prevent runtime errors by enforcing strict type checking on function arguments.
             * In testing scenarios, where mocks or dynamically generated values are common,
             * this rule can be overly restrictive and is therefore disabled.
             */
            "@typescript-eslint/no-unsafe-argument": "off",
        },
    },
];
