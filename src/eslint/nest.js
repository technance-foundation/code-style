/// <reference types="./types.d.ts" />
//@ts-check

import globals from "globals";
import general from "./general.js";

import { nestRules } from "./rules/index.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...general,
    {
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
            ...nestRules,
        },
    },
];
