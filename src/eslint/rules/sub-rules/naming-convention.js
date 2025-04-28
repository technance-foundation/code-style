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
export const namingConvention = [
    {
        selector: "default",
        format: ["strictCamelCase", "StrictPascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
    },
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
];
