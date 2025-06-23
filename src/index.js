import { optionalRequire } from "./optional-require.cjs";

import eslintGeneral from "./eslint/general.js";
import eslintReact from "./eslint/react.js";
import eslintNext from "./eslint/next.js";
import eslintNest from "./eslint/nest.js";
import eslintNode from "./eslint/node.js";
import prettierGeneral from "./prettier/general.cjs";

const prettierTailwind = optionalRequire("./prettier/tailwind.cjs", ["prettier-plugin-tailwindcss"]);

const prettier = {
    general: prettierGeneral,
    tailwind: prettierTailwind,
};

const eslint = {
    general: eslintGeneral,
    react: eslintReact,
    next: eslintNext,
    nest: eslintNest,
    node: eslintNode,
};

export { prettier, eslint };
