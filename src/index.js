import eslintGeneral from "./eslint/general.js";
import eslintReact from "./eslint/react.js";
import eslintNext from "./eslint/next.js";
import eslintNest from "./eslint/nest.js";
import eslintNode from "./eslint/node.js";
import prettierGeneral from "./prettier/general.cjs";
import prettierTailwind from "./prettier/tailwind.cjs";

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
