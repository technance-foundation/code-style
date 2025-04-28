//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const nodeRules = {
    /**
     * Enforce usage of the `node:` prefix for builtin imports.
     * Ensures clarity between Node.js core modules and third-party packages.
     */
    "node/prefer-node-protocol": "error",

    /**
     * Disallow multiple consecutive empty lines.
     * Keeps code concise by limiting blank lines to a single line.
     */
    "no-multiple-empty-lines": ["error", { max: 1 }],

    /**
     * Enforce maximum line length for code and comments.
     * Limits code to 130 chars and comments to 140 for readability.
     */
    "max-len": [
        "error",
        {
            code: 130,
            comments: 140,
            ignoreUrls: true,
            ignoreTemplateLiterals: true,
        },
    ],

    /**
     * Variables must be camelCase, UPPER_CASE, or PascalCase
     * (e.g. `let userName`, `const MAX_COUNT`, `const UserAge`)
     * Type-like names (aliases, enums) must be PascalCase
     * (e.g. `type UserProfile = { … }`, `enum OrderStatus { Pending, Shipped }`)
     * Classes must be PascalCase
     * (e.g. `class ShoppingCart { … }`)
     * Interfaces must be PascalCase and **not** start with “I”
     * (e.g. `interface UserProfile { … }` // ✖ not `IUserProfile`)
     */
    "@typescript-eslint/naming-convention": [
        "error",
        {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
        {
            selector: "class",
            format: ["PascalCase"],
        },
        {
            selector: "interface",
            format: ["PascalCase"],
            custom: { regex: "^I[A-Z]", match: false },
        },
    ],
};
