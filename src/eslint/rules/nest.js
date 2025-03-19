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

    /**
     * Disables the rule that prevents assignment of potentially unsafe values.
     * Provides flexibility when assigning values that might not strictly match the expected types.
     */
    "@typescript-eslint/no-unsafe-assignment": "off",

    /**
     * Disables the rule enforcing file extension specification in import statements.
     * Nest.js follows a naming pattern for modules such as .entity, .config, .storage, and .decorator.
     * Enforcing extensions leads to frequent false errors due to these naming conventions.
     * Disabling the rule enhances development flexibility and minimizes unnecessary import errors.
     */
    "import/extensions": "off",
};
