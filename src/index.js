import eslintGeneral from "./eslint/general.js";
import eslintReact from "./eslint/react.js";
import eslintNext from "./eslint/next.js";
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
};

export { prettier, eslint };
