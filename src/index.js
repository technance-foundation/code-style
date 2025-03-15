import eslintGeneral from "./eslint/general.js";
import prettierGeneral from "./prettier/general.cjs";
import prettierTailwind from "./prettier/tailwind.cjs";

const prettier = {
    general: prettierGeneral,
    tailwind: prettierTailwind,
};

const eslint = {
    general: eslintGeneral,
};

export { prettier, eslint };
