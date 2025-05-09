/// <reference types="./types.d.ts" />
//@ts-check

import { fixupPluginRules } from "@eslint/compat";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import eslintPluginSortExportAll from "eslint-plugin-sort-export-all";

import general from "./general.js";

import { reactRules } from "./rules/index.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...general,
    {
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            import: importPlugin,
            "sort-export-all": eslintPluginSortExportAll,
            react: reactPlugin,
            "react-hooks": fixupPluginRules(reactHooksPlugin),
            "jsx-a11y": jsxA11yPlugin,
        },
        settings: { react: { version: "detect" } },
    },
    {
        rules: {
            ...reactPlugin.configs["jsx-runtime"].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...reactRules,
        },
    },
];
