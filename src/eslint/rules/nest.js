//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const nestRules = {
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
};
