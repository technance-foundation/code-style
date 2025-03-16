//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const typescriptRules = {
    /**
     * Disallow using classes and variables before they are defined.
     * Functions are allowed to be used before definition (hoisted), while classes and variables are not.
     */
    "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true, allowNamedExports: false },
    ],

    /**
     * Enforce consistent type exports.
     * Automatically fixes mixed exports by using inline type specifiers.
     */
    "@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: true }],

    /**
     * Enforce consistent type imports.
     * Uses inline type imports style to maintain clarity in code.
     */
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],

    /**
     * Disable the rule that disallows the use of TypeScript namespaces.
     * (Namespaces are allowed in this configuration.)
     */
    "@typescript-eslint/no-namespace": "off",

    /**
     * Warn when promises are created without handling their resolution or rejection.
     * This helps ensure asynchronous operations are properly managed.
     */
    "@typescript-eslint/no-floating-promises": "warn",

    /**
     * Warn about passing arguments with unsafe types.
     * This rule helps catch potential runtime errors due to unexpected type values.
     */
    "@typescript-eslint/no-unsafe-argument": "warn",

    /**
     * Enforce naming conventions for identifiers:
     * - Default identifiers must be in strictCamelCase, StrictPascalCase, or UPPER_CASE.
     * - Property names must follow the same casing rules.
     * Leading underscores are allowed while trailing underscores are forbidden.
     */
    "@typescript-eslint/naming-convention": [
        "warn",
        {
            selector: "default",
            format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "forbid",
        },
        {
            selector: "property",
            format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "forbid",
        },
    ],

    /**
     * Warn when deprecated APIs or features are used.
     * This helps to proactively update code that might rely on outdated functionality.
     */
    "@typescript-eslint/no-deprecated": "warn",

    /**
     * Disallow side effects in type-only imports.
     * This ensures that import type statements remain pure and free of runtime side effects.
     */
    "@typescript-eslint/no-import-type-side-effects": "error",

    /**
     * Error on unused variables to help maintain clean, maintainable code.
     * Ignores function arguments starting with an underscore and unused rest properties.
     */
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", ignoreRestSiblings: true }],

    /**
     * Disable enforcing explicit accessibility modifiers (public/private/protected) on class members.
     * This provides flexibility in defining class properties and methods.
     */
    "@typescript-eslint/explicit-member-accessibility": "off",

    /**
     * Disable requiring explicit return types for functions and methods at module boundaries.
     * This relaxes the strictness on type annotations for exported members.
     */
    "@typescript-eslint/explicit-module-boundary-types": "off",

    /**
     * Disable the requirement for explicit return types on functions.
     * This allows functions to infer return types automatically.
     */
    "@typescript-eslint/explicit-function-return-type": "off",

    /**
     * Allow empty interfaces without warnings.
     * This is useful in cases where an empty interface is used as a placeholder or for future extension.
     */
    "@typescript-eslint/no-empty-interface": "off",

    /**
     * Enforces the use of Array<T> format over the T[] shorthand.
     * Ensures consistent array type declarations for improved readability.
     */
    "@typescript-eslint/array-type": ["error", { default: "generic", readonly: "generic" }],

    /**
     * Prevents usage of @ts-ignore while allowing @ts-expect-error with a description.
     * Encourages proper documentation and explicit handling of type issues.
     */
    "@typescript-eslint/ban-ts-comment": [
        "error",
        {
            "ts-expect-error": false,
            "ts-ignore": "allow-with-description",
        },
    ],

    /**
     * Disallows duplicate enum values to avoid ambiguous behavior.
     * Prevents bugs that can arise from unintended duplicate entries.
     */
    "@typescript-eslint/no-duplicate-enum-values": "error",

    /**
     * Disallows extra non-null assertions since additional ones provide no benefit.
     * Encourages cleaner code by using only the necessary non-null assertion.
     */
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    /**
     * Detects conditions that always evaluate to true or false based on type analysis.
     * Helps eliminate redundant checks and improves overall code clarity.
     */
    "@typescript-eslint/no-unnecessary-condition": "error",

    /**
     * Flags type assertions that do not change the inferred type of an expression.
     * Keeps the codebase clean by avoiding redundant or unnecessary type conversions.
     */
    "@typescript-eslint/no-unnecessary-type-assertion": "error",

    /**
     * Disallows using the unsafe built-in Function type in function declarations.
     * Promotes explicit function typing for enhanced type safety and clarity.
     */
    "@typescript-eslint/no-unsafe-function-type": "error",

    /**
     * Prevents the use of wrapper object types for primitives to avoid confusion.
     * Encourages the use of native primitive types for better performance and reliability.
     */
    "@typescript-eslint/no-wrapper-object-types": "error",

    /**
     * Warns when an async function does not contain any await expressions.
     * Indicates that the async modifier may be unnecessary and the function could be simplified.
     */
    "@typescript-eslint/require-await": "warn",
};
