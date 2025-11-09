//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const nodeRules = {
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
     * Disables the rule that prevents the use of the "any" type.
     * Allows developers to use "any" when strict typing is too limiting.
     */
    "@typescript-eslint/no-explicit-any": "off",

    /**
     * Warns when promises are not handled properly.
     * Helps to catch potential issues with unhandled asynchronous operations.
     */
    "@typescript-eslint/no-floating-promises": "warn",

    /**
     * Warns when potentially unsafe types are passed as arguments.
     * Aims to reduce runtime errors by enforcing safer type usage.
     */
    "@typescript-eslint/no-unsafe-argument": "warn",

    /**
     * Disables the rule that prevents assignment of potentially unsafe values.
     * Provides flexibility when assigning values that might not strictly match the expected types.
     */
    "@typescript-eslint/no-unsafe-assignment": "off",
};
