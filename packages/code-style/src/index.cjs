const prettierGeneral = require("./prettier/general.cjs");
const prettierTailwind = require("./prettier/tailwind.cjs");

const prettier = {
    general: prettierGeneral,
    tailwind: prettierTailwind,
};

module.exports = { prettier };
