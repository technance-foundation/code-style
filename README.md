# `@technance/code-style`

`@technance/code-style` provides standardized ESLint and Prettier configurations to help enforce a consistent code style across your projects. Whether you're building Next.js applications, general JavaScript/TypeScript libraries, React apps—or even using Tailwind CSS—this package offers pre-configured setups that you can extend and customize.

## Installation

Install the package as a development dependency using pnpm, npm, or yarn:

```bash
pnpm add @technance/code-style -D
```

```bash
npm install --save-dev @technance/code-style
```

```bash
yarn add -D @technance/code-style
```

## ESLint Configurations

The package includes several ESLint configuration presets. Choose the one that best fits your project type, then extend or override rules as needed.

### Next.js Apps

For Next.js projects, use the `eslint.next` preset. For example:

```js
// eslint.config.mjs
import { eslint } from "@technance/code-style";

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...eslint.next,
    {
        rules: {
            // Extend or override...
        },
    },
];
```

### React Apps or React Libraries

For React projects, use the `eslint.react` preset:

```js
// eslint.config.mjs
import { eslint } from "@technance/code-style";

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...eslint.react,
    {
        rules: {
            // Extend or override...
        },
    },
];
```

### General JavaScript/TypeScript Libraries

For libraries or projects that do not use Next.js or React, use the `eslint.general` preset:

```js
// eslint.config.mjs
import { eslint } from "@technance/code-style";

/** @type {import('eslint').Linter.Config[]} */
export default [
    ...eslint.general,
    {
        rules: {
            // Extend or override...
        },
    },
];
```

### Nest.js (Backend Projects)

For Nest.js backend projects, use the `eslint.nest` preset. For example:

```js
// eslint.config.mjs
import { eslint } from "@technance/code-style";

/** @type {import("typescript-eslint").ConfigArray} */
export default [
    {
        ignores: ["**/eslint.config.mjs"],
    },
    ...eslint.nest,
    {
        rules: {
            // Extend or override...
        },
    },
];
```

### Expo (Mobile Applications)

For react-native(Expo) projects, use the `eslint.expo` preset. For example:

```js
// eslint.config.mjs
import { eslint } from "@technance/code-style";

/** @type {import("eslint").Linter.Config[]} */
export default [
    ...eslint.expo,
    {
        rules: {
            // Extend or override...
        },
    },
];
```

## Prettier Configurations

`@technance/code-style` also offers Prettier configurations to keep your code formatting consistent. There are two presets available: one for general projects and one for Tailwind CSS projects.

### Frontend App Using Tailwind CSS

If your frontend project uses Tailwind CSS, use the Tailwind-specific Prettier configuration. First, install the required peer dependency:

```bash
pnpm add prettier-plugin-tailwindcss -D
```

```bash
npm install --save-dev prettier-plugin-tailwindcss
```

```bash
yarn add -D prettier-plugin-tailwindcss
```

Then create a file named `prettier.config.cjs` with the following content:

```js
// prettier.config.cjs
const codeStyle = require("@technance/code-style");

/** @type {import('@technance/code-style/types').PrettierTailwindOptions} */
const config = {
    ...codeStyle.prettier.tailwind,
    tailwindFunctions: ["cn", "cva", "tv", "clsx"], // Or other functions that compose tailwind classes
};

module.exports = config;
```

### General Prettier Config

For projects that do not use Tailwind CSS (such as backend projects or standard frontend apps), use the general Prettier configuration:

```js
// prettier.config.cjs
const codeStyle = require("@technance/code-style");

/** @type {import('@technance/code-style/types').PrettierGeneralOptions} */
const config = {
    ...codeStyle.prettier.general,
};

module.exports = config;
```

## Customization

You can further customize both ESLint and Prettier configurations by merging or overriding specific rules. This flexibility allows you to adhere to your coding conventions while benefiting from the solid defaults provided by `@technance/code-style`.

## License

This project is licensed under the MIT License.
