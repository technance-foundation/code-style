//@ts-check

/** @type {import('eslint').Linter.RulesRecord} */
export const reactRules = {
    /**
     * Disables prop-types enforcement since TypeScript provides static type checking.
     * This avoids redundant runtime prop validations.
     */
    "react/prop-types": "off",

    /**
     * Disables checking that the style prop is an object.
     * Allows flexibility in how styles are provided to components.
     */
    "react/style-prop-object": "off",

    /**
     * Disables the requirement for default props.
     * Leverages TypeScript's default parameter values instead.
     */
    "react/require-default-props": "off",

    /**
     * Disables warnings for defining nested components inside render methods.
     * Prevents false positives in patterns that are known to be safe.
     */
    "react/no-unstable-nested-components": "off",

    /**
     * Disables warnings for binding functions inline in JSX.
     * Permits inline binding when performance impact is negligible.
     */
    "react/jsx-no-bind": "off",

    /**
     * Enforces the use of stateless (functional) components over class components.
     * This encourages simpler, more readable components when state or lifecycle methods are unnecessary.
     */
    "react/prefer-stateless-function": "error",

    /**
     * Disables marking React as used in JSX.
     * Unnecessary with the new JSX transform where explicit React import isn’t needed.
     */
    "react/jsx-uses-react": "off",

    /**
     * Disables requiring React in scope when using JSX.
     * Aligns with modern React setups that no longer require the import.
     */
    "react/react-in-jsx-scope": "off",

    /**
     * Warns when defined prop types are not used in the component.
     * Helps identify and remove redundant or unused prop type definitions.
     */
    "react/no-unused-prop-types": "warn",

    /**
     * Warns against using overly broad prop types (like 'object' or 'array').
     * Encourages more specific prop type definitions for better maintainability.
     */
    "react/forbid-prop-types": "warn",

    /**
     * Warns if defaultProps do not match propTypes, but allows required defaults.
     * Ensures consistency between default props and their type definitions.
     */
    "react/default-props-match-prop-types": [
        "warn",
        {
            allowRequiredDefaults: true,
        },
    ],

    /**
     * Warns when using array indices as keys in lists.
     * Helps avoid potential rendering issues when list items change order.
     */
    "react/no-array-index-key": "warn",

    /**
     * Warns if component state is declared but never used.
     * Identifies potential dead code in stateful components.
     */
    "react/no-unused-state": "warn",

    /**
     * Disables restrictions on spreading props in JSX.
     * Permits prop spreading for concise and flexible component usage.
     */
    "react/jsx-props-no-spreading": "off",

    /**
     * Warns if JSX props are not alphabetically sorted (ignoring case).
     * Promotes a consistent and readable ordering of props.
     */
    "react/jsx-sort-props": ["warn", { ignoreCase: true }],

    /**
     * Warns if files containing JSX do not have .jsx or .tsx extensions.
     * Ensures proper file naming conventions for files using JSX syntax.
     */
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],

    /**
     * Warns if prop types are not sorted alphabetically.
     * Also sorts nested shape props to enhance maintainability.
     */
    "react/sort-prop-types": ["warn", { ignoreCase: true, sortShapeProp: true }],

    /**
     * Warns if class component methods are not ordered according to best practices.
     * The enforced order is: static methods, instance variables, lifecycle methods, everything else, then render.
     */
    "react/sort-comp": [
        "warn",
        {
            order: ["static-methods", "instance-variables", "lifecycle", "everything-else", "render"],
        },
    ],

    /**
     * Errors when JSX elements in lists are missing a unique key prop.
     * Prevents rendering issues by ensuring each element has a stable identifier.
     */
    "react/jsx-key": "error",

    /**
     * Enforces initializing state as a class property rather than in the constructor.
     * Promotes modern syntax and reduces boilerplate in class components.
     */
    "react/state-in-constructor": ["error", "never"],

    /**
     * Disables enforcement of a specific placement for static properties on components.
     * Allows flexibility in how static properties are defined.
     */
    "react/static-property-placement": "off",

    /**
     * Errors on unescaped entities (">" and "}") in JSX text.
     * Ensures proper escaping to avoid rendering and accessibility issues.
     */
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],

    /**
     * Disables enforcement of destructuring assignment for props, state, and context.
     * Provides flexibility in how component properties are accessed.
     */
    "react/destructuring-assignment": "off",

    /**
     * Errors if React hooks are used incorrectly.
     * Enforces the rules of hooks to ensure predictable and correct hook behavior.
     */
    "react-hooks/rules-of-hooks": "error",

    /**
     * Errors when dependencies in React hooks (like useEffect) are not exhaustively specified.
     * Prevents bugs related to stale closures by ensuring all dependencies are declared.
     */
    "react-hooks/exhaustive-deps": "error",

    /**
     * Warns if elements (like images) are missing alt text.
     * Enhances accessibility by ensuring all non-text content is properly described.
     */
    "jsx-a11y/alt-text": "warn",

    /**
     * Warns if anchor elements are used without valid href attributes.
     * Promotes accessible and semantic links for better navigation.
     */
    "jsx-a11y/anchor-is-valid": "warn",

    /**
     * Warns if clickable elements lack corresponding keyboard event handlers.
     * Improves accessibility by ensuring non-mouse interactions are handled.
     */
    "jsx-a11y/click-events-have-key-events": "warn",

    /**
     * Warns if interactive controls do not have associated labels.
     * Ensures that all interactive elements are accessible to assistive technologies.
     */
    "jsx-a11y/control-has-associated-label": "warn",

    /**
     * Warns if iframes are missing a title attribute.
     * Improves accessibility by providing a descriptive label for iframe content.
     */
    "jsx-a11y/iframe-has-title": "warn",

    /**
     * Warns if label elements are not correctly associated with a form control.
     * Enhances form accessibility by ensuring proper label usage.
     */
    "jsx-a11y/label-has-for": "warn",

    /**
     * Warns against using the autofocus attribute.
     * Prevents potential usability issues for keyboard and assistive technology users.
     */
    "jsx-a11y/no-autofocus": "warn",

    /**
     * Warns if non-interactive elements have event handlers.
     * Helps avoid confusing assistive technologies by keeping semantics clear.
     */
    "jsx-a11y/no-noninteractive-element-interactions": "warn",

    /**
     * Warns if non-interactive elements are assigned interactive roles.
     * Ensures semantic correctness by matching elements with appropriate roles.
     */
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",

    /**
     * Warns if static elements have interaction handlers without proper role definitions.
     * Promotes adherence to accessibility standards by ensuring correct element usage.
     */
    "jsx-a11y/no-static-element-interactions": "warn",

    /**
     * Warns if elements with ARIA roles are missing required ARIA properties.
     * Ensures that components fully comply with accessibility guidelines.
     */
    "jsx-a11y/role-has-required-aria-props": "warn",
};
