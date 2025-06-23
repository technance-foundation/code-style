const { optionalRequire } = require("./optional-require.cjs");

const prettierGeneral = require("./prettier/general.cjs");
const prettierTailwind = optionalRequire("./prettier/tailwind.cjs", ["prettier-plugin-tailwindcss"]);

const prettier = {
    general: prettierGeneral,
    tailwind: prettierTailwind,
};

module.exports = { prettier };
