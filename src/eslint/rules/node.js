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
};
