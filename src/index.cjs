const prettierGeneral = require("./prettier/general.cjs");
const prettierTailwind = require("./prettier/tailwind.cjs");
const biomeConfig = require("./biome/config.cjs");

const prettier = {
    general: prettierGeneral,
    tailwind: prettierTailwind,
};

const biome = biomeConfig;

module.exports = { prettier, biome };
