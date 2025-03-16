/// <reference types="./types.d.ts" />
//@ts-check

import { fixupPluginRules } from "@eslint/compat";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";

import general from "./general.js";

import { reactRules } from "./rules";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [
    ...general,
    {
        plugins: {
            react: reactPlugin,
            "react-hooks": fixupPluginRules(reactHooksPlugin),
            "jsx-a11y": jsxA11yPlugin,
        },
    },
    {
        rules: {
            ...reactPlugin.configs["jsx-runtime"].rules,
            ...reactHooksPlugin.configs.recommended.rules,
            ...reactRules,
        },
    },
];
