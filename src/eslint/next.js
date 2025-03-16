/// <reference types="./types.d.ts" />
//@ts-check
import nextPlugin from "@next/eslint-plugin-next";

import react from "./react.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...react,
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
            "@next/next/no-duplicate-head": "off",
        },
    },
];
