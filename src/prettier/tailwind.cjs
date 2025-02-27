const general = require("./general.cjs");

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig | TailwindConfig } */
module.exports = {
    ...general,
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["tv"],
};
