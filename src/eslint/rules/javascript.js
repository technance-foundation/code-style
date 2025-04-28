//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const javascriptRules = {
    /**
     * Ensures loop counters update correctly.
     * Prevents infinite loops caused by misconfigured increments.
     */
    "for-direction": "error",

    /**
     * Disallows async functions as promise executors.
     * Prevents unexpected behavior in promise handling.
     */
    "no-async-promise-executor": "error",

    /**
     * Forbids declarations inside case or default clauses.
     * Reduces confusion and potential hoisting issues.
     */
    "no-case-declarations": "error",

    /**
     * Prevents reassigning class names after declaration.
     * Helps maintain class integrity and clarity.
     */
    "no-class-assign": "error",

    /**
     * Disallows comparing values against negative zero.
     * Avoids subtle bugs when handling numeric comparisons.
     */
    "no-compare-neg-zero": "error",

    /**
     * Forbids assignment operators in conditional expressions.
     * Eliminates potential bugs from accidental assignments.
     */
    "no-cond-assign": "error",

    /**
     * Prevents binary expressions that always evaluate to a constant.
     * Ensures conditions remain meaningful and dynamic.
     */
    "no-constant-binary-expression": "error",

    /**
     * Disallows constant conditions in code.
     * Avoids unintentional infinite loops and dead code.
     */
    "no-constant-condition": "error",

    /**
     * Forbids control characters in regular expressions.
     * Ensures regex patterns are valid and secure.
     */
    "no-control-regex": "error",

    /**
     * Disallows the use of debugger statements.
     * Prevents accidental pauses in production code.
     */
    "no-debugger": "error",

    /**
     * Disallows deletion of variables.
     * Prevents unintended side effects in variable management.
     */
    "no-delete-var": "error",

    /**
     * Forbids duplicate else-if clauses in switch statements.
     * Helps avoid redundant and confusing code paths.
     */
    "no-dupe-else-if": "error",

    /**
     * Disallows duplicate case labels within switch statements.
     * Ensures each case is unique and unambiguous.
     */
    "no-duplicate-case": "error",

    /**
     * Forbids empty character classes in regular expressions.
     * Prevents regex errors and unexpected matches.
     */
    "no-empty-character-class": "error",

    /**
     * Disallows empty destructuring patterns.
     * Prevents meaningless syntax that has no effect.
     */
    "no-empty-pattern": "error",

    /**
     * Forbids empty static blocks in class definitions.
     * Encourages meaningful static initialization in classes.
     */
    "no-empty-static-block": "error",

    /**
     * Disallows reassigning exceptions in catch clauses.
     * Ensures error objects remain unchanged for accurate handling.
     */
    "no-ex-assign": "error",

    /**
     * Prevents unnecessary boolean casts.
     * Promotes cleaner code by avoiding redundant type conversions.
     */
    "no-extra-boolean-cast": "error",

    /**
     * Disallows fallthrough between switch cases.
     * Forces explicit handling of each case with break or return.
     */
    "no-fallthrough": "error",

    /**
     * Forbids assignments to read-only global variables.
     * Protects built-in objects and global constants from mutation.
     */
    "no-global-assign": "error",

    /**
     * Forbids irregular whitespace outside of strings and comments.
     * Ensures consistent formatting and prevents hidden errors.
     */
    "no-irregular-whitespace": "error",

    /**
     * Prevents numeric literals that lose precision.
     * Ensures that large numbers are accurately represented.
     */
    "no-loss-of-precision": "error",

    /**
     * Disallows misleading character classes in regular expressions.
     * Prevents unintended regex behavior due to ambiguous patterns.
     */
    "no-misleading-character-class": "error",

    /**
     * Forbids non-octal decimals in escape sequences.
     * Ensures escape sequences are interpreted correctly.
     */
    "no-nonoctal-decimal-escape": "error",

    /**
     * Disallows the use of octal literals.
     * Encourages modern number representation to avoid ambiguity.
     */
    "no-octal": "error",

    /**
     * Prevents multiple spaces in regular expressions.
     * Ensures regex patterns remain clear and predictable.
     */
    "no-regex-spaces": "error",

    /**
     * Disallows self-assignment of variables.
     * Avoids redundant code that has no effect.
     */
    "no-self-assign": "error",

    /**
     * Disables variable shadowing.
     * Prevents inner scope variables from obscuring outer scope ones.
     */
    "no-shadow": "off",

    /**
     * Forbids shadowing of restricted names.
     * Protects built-in identifiers and keywords from being overwritten.
     */
    "no-shadow-restricted-names": "error",

    /**
     * Disallows sparse arrays with empty slots.
     * Encourages complete and explicit array definitions.
     */
    "no-sparse-arrays": "error",

    /**
     * Forbids control flow statements in finally blocks.
     * Avoids unpredictable behavior during exception handling.
     */
    "no-unsafe-finally": "error",

    /**
     * Disallows unsafe use of optional chaining.
     * Ensures that optional chaining is used in a controlled manner.
     */
    "no-unsafe-optional-chaining": "error",

    /**
     * Prevents unused labels in code.
     * Helps maintain clear and purposeful loop or block labels.
     */
    "no-unused-labels": "error",

    /**
     * Disallows unused private class members.
     * Encourages removal of dead code in class definitions.
     */
    "no-unused-private-class-members": "error",

    /**
     * Forbids useless backreferences in regular expressions.
     * Avoids regex patterns that refer to non-existent capturing groups.
     */
    "no-useless-backreference": "error",

    /**
     * Disallows catch blocks that only rethrow errors.
     * Encourages handling errors or letting them propagate naturally.
     */
    "no-useless-catch": "error",

    /**
     * Prevents unnecessary escape characters in strings and regexes.
     * Simplifies code by removing redundant escape sequences.
     */
    "no-useless-escape": "error",

    /**
     * Disallows var declarations in favor of let/const.
     * Promotes modern variable declarations for clearer scope management.
     */
    "no-var": "error",

    /**
     * Forbids the use of the with statement.
     * Eliminates ambiguous scope changes to improve code clarity.
     */
    "no-with": "error",

    /**
     * Prefers const declarations when variables are not reassigned.
     * Encourages immutability for safer and more predictable code.
     */
    "prefer-const": "error",

    /**
     * Requires generator functions to include a yield statement.
     * Ensures generator functions perform as intended.
     */
    "require-yield": "error",

    /**
     * Disallows using isNaN() on non-number values.
     * Ensures that isNaN is only used with numeric comparisons.
     */
    "use-isnan": "error",

    /**
     * Enforces that typeof comparisons use valid strings.
     * Prevents errors when checking the type of a variable.
     */
    "valid-typeof": "error",
    /**
     * Disables checking that named imports correspond to exported names.
     * Allows flexibility when importing modules without strict export validation.
     */
    "import/named": "off",

    /**
     * Disables the rule preventing use of the Array constructor.
     * Permits creating arrays with new Array(), if needed.
     */
    "no-array-constructor": "off",

    /**
     * Disables the rule against redeclaring variables.
     * Allows variable redeclarations in the same scope.
     */
    "no-redeclare": "off",

    /**
     * Disables the check for using undeclared variables.
     * Useful when globals are defined externally or via other means.
     */
    "no-undef": "off",

    /**
     * Disables warnings for unused variables.
     * Helps when variables serve side effects or are conditionally used.
     */
    "no-unused-vars": "off",

    /**
     * Enforces alphabetical sorting of all exports.
     * Sorts exports in ascending order, ignoring case and natural order.
     */
    "sort-export-all/sort-export-all": ["error", "asc", { caseSensitive: false, natural: false }],

    /**
     * Disables restrictions on certain syntax forms.
     * Allows usage of any language constructs without ESLint limitations.
     */
    "no-restricted-syntax": "off",

    /**
     * Disables the rule against using variables before they are defined.
     * Permits referencing variables prior to their declaration.
     */
    "no-use-before-define": "off",

    /**
     * Disallows throwing literals as exceptions.
     * Ensures that only Error objects (or instances of Error) are thrown.
     */
    "no-throw-literal": "error",

    /**
     * Warns when identifiers are not in camelCase.
     * Encourages consistent naming conventions for better readability.
     */
    camelcase: "warn",

    /**
     * Warns if destructuring is not used when applicable.
     * Encourages the use of destructuring assignments for concise code.
     */
    "prefer-destructuring": "warn",

    /**
     * Disallows the use of certain ambiguous or shortened identifier names.
     * Prevents use of names like arr, cb, e, etc., to improve code clarity.
     */
    "id-blacklist": ["error", "arr", "cb", "e", "el", "err", "idx", "num", "req", "res", "str", "tmp", "val"],

    /**
     * Disables the rule limiting the number of classes per file.
     * Allows defining multiple classes in a single file as needed.
     */
    "max-classes-per-file": "off",

    /**
     * Disables the rule against using the ++ and -- operators.
     * Permits unary increment and decrement operators in code.
     */
    "no-plusplus": "off",

    /**
     * Warns when nested ternary operators are used.
     * Encourages simpler conditional expressions for improved readability.
     */
    "no-nested-ternary": "warn",

    /**
     * Disallows assignments in return statements.
     * Permits assignments only when wrapped in parentheses for clarity.
     */
    "no-return-assign": ["error", "except-parens"],

    /**
     * Disables browser compatibility checks.
     * Allows using APIs without linting for target browser support.
     */
    "compat/compat": "off",

    /**
     * Disables checks for unresolved module imports.
     * Useful when module resolution is managed by other tooling.
     */
    "import/no-unresolved": "off",

    /**
     * Enforces consistent file extension usage in imports.
     * Disallows extensions except for json, scss, and svg files which must include them.
     */
    "import/extensions": ["error", "never", { json: "always", scss: "always", svg: "always" }],

    /**
     * Enforces a consistent order for import statements by grouping them into:
     * - "builtin" and "external": Node.js and third-party modules (e.g., fs, React).
     * - "internal": Project-specific modules, including aliased paths matching "#*".
     * - "parent", "sibling", and "index": Relative imports from parent directories, same directory, or index files.
     *
     * Within each group, imports are alphabetized (ascending, case-insensitive) and separated by a newline for clarity.
     * This helps maintain a structured and readable codebase.
     *
     * @example
     * // Unordered imports:
     * import helper from "../helper";
     * import React from "react";
     * import fs from "fs";
     * import myModule from "#/myModule";
     * import another from "../parent";
     * import sibling from "./sibling";
     *
     * // Correct order enforced by "import/order":
     *
     * // Builtin/External
     * import fs from "fs";
     * import React from "react";
     *
     * // Internal (custom aliased modules)
     * import myModule from "#/myModule";
     *
     * // Parent
     * import another from "../parent";
     *
     * // Sibling
     * import sibling from "./sibling";
     */
    "import/order": [
        "error",
        {
            alphabetize: { order: "asc", caseInsensitive: true },
            groups: [["builtin", "external"], "internal", "parent", "sibling", "index"],
            "newlines-between": "always",
            pathGroups: [
                { pattern: "#*", group: "internal" },
                { pattern: "#*/**", group: "internal" },
            ],
        },
    ],

    /**
     * Enforces sorting of import members within a declaration.
     * Sorts members in a specific order while ignoring the overall declaration order.
     */
    "sort-imports": [
        "error",
        {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
    ],

    /**
     * Disables preference for default exports when only one export exists.
     * Allows modules to use named exports regardless of the number of exports.
     */
    "import/prefer-default-export": "off",

    /**
     * Disables warnings for circular dependencies in module imports.
     * Permits cycles in import relationships, leaving resolution to runtime.
     */
    "import/no-cycle": "off",

    /**
     * Disables checks for importing packages not listed in dependencies.
     * Allows importing extraneous dependencies without linting errors.
     */
    "import/no-extraneous-dependencies": "off",

    /**
     * Enforces using function declarations over function expressions.
     * Promotes consistency by requiring functions to be defined via declarations.
     */
    "func-style": ["error", "declaration"],

    /**
     * Disallows duplicate imports in a single file.
     * Encourages combining imports from the same module into a single statement.
     */
    "import/no-duplicates": ["error", { "prefer-inline": true }],

    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, or `break`.
     * Eliminates dead code and potential logic errors.
     */
    "no-unreachable": ["error"],

    /**
     * Disallow multiple consecutive spaces (except for alignment).
     * Keeps spacing consistent and avoids accidental extra whitespace.
     */
    "no-multi-spaces": ["error"],

    /**
     * Disallow initializing variables to `undefined`.
     * Encourages cleaner declarations without redundant assignments.
     */
    "no-undef-init": ["error"],

    /**
     * Disallow padding (empty lines) inside code blocks.
     * Prevents unnecessary vertical whitespace and maintains focus.
     */
    "padded-blocks": ["error", "never"],

    /**
     * Disallow spaces inside parentheses.
     * Ensures tight grouping and avoids inconsistent spacing.
     */
    "space-in-parens": ["error", "never"],

    /**
     * Enforce one true brace style (1tbs) for block statements.
     * Maintains consistent brace placement across the codebase.
     */
    "brace-style": ["error", "1tbs"],

    /**
     * Require braces for all control statements.
     * Prevents errors from relying on implicit single-statement blocks.
     */
    curly: ["error", "all"],

    /**
     * Disallow combining multiple variable declarations into one `var` statement.
     * Promotes separate declarations to improve readability and reduce mistakes.
     */
    "one-var": ["error", "never"],

    /**
     * Require trailing commas in multiline constructs.
     * Reduces diff noise and simplifies adding or removing elements.
     */
    "comma-dangle": ["error", "always-multiline"],

    /**
     * Enforce strict equality operators (`===` and `!==`).
     * Prevents unexpected type coercion in equality comparisons.
     */
    eqeqeq: ["error", "always"],

    /**
     * Enforce a newline at the end of files.
     * Ensures POSIX compatibility and avoids issues with file concatenation.
     */
    "eol-last": ["error", "always"],

    /**
     * Require parentheses when invoking a constructor with no arguments.
     * Clarifies intent and prevents potential ambiguity.
     */
    "new-parens": ["error", "always"],

    /**
     * Disallow usage of `arguments.caller` and `arguments.callee`.
     * These features are deprecated and hinder JavaScript engine optimizations.
     */
    "no-caller": ["error"],

    /**
     * Disallow use of `eval()`.
     * Prevents arbitrary code execution and security vulnerabilities.
     */
    "no-eval": ["error"],

    /**
     * Disallow function or variable declarations in nested blocks.
     * Avoids confusing hoisting behavior and maintains predictable scope.
     */
    "no-inner-declarations": ["error"],

    /**
     * Disallow invalid regular expressions in `RegExp` constructors.
     * Catches typos and incorrect flags to avoid runtime errors.
     */
    "no-invalid-regexp": ["error", { allowConstructorFlags: ["u", "y"] }],

    /**
     * Disallow use of the `__proto__` property.
     * Encourages standard methods like `Object.getPrototypeOf()` for reliability.
     */
    "no-proto": ["error"],

    /**
     * Disallow self-comparisons where both sides are identical.
     * Highlights likely logic errors and redundant code.
     */
    "no-self-compare": ["error"],

    /**
     * Disallow mixed spaces and tabs for indentation.
     * Ensures consistent formatting and prevents alignment issues.
     */
    "no-mixed-spaces-and-tabs": ["error"],

    /**
     * Disallow negating the left operand in relational expressions.
     * Prevents unexpected behavior in patterns like `!key in object`.
     */
    "no-unsafe-negation": ["error"],

    /**
     * Disallow creation of wrapper objects for primitive types.
     * Prevents unintended behavior and reduces unnecessary object instantiation.
     */
    "no-new-wrappers": ["error"],

    /**
     * Disallow `this` or `super` before calling `super()` in constructors.
     * Ensures derived classes are properly initialized before use.
     */
    "no-this-before-super": ["error"],

    /**
     * Enforce no spaces between rest/spread operators and their expressions.
     * Maintains consistent spacing in destructuring and spread usage.
     */
    "rest-spread-spacing": ["error", "never"],

    /**
     * Disallow trailing whitespace at the end of lines.
     * Keeps diffs clean and avoids unnecessary whitespace characters.
     */
    "no-trailing-spaces": ["error", { ignoreComments: true }],

    /**
     * Enforce error-first callback parameter naming.
     * Ensures error arguments are clearly named `err` or `error`.
     */
    "handle-callback-err": ["error", "^(err|error)$"],
};
