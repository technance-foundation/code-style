import eslintExpo from "./eslint/expo.js";
import eslintGeneral from "./eslint/general.js";
import eslintNest from "./eslint/nest.js";
import eslintNext from "./eslint/next.js";
import eslintNode from "./eslint/node.js";
import eslintReact from "./eslint/react.js";
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
    expo: eslintExpo,
};

export { prettier, eslint };
