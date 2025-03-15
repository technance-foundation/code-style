import eslintGeneral from "./eslint/general.js";
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
};

export { prettier, eslint };
