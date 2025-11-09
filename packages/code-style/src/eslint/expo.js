//@ts-check

import expoConfig from "eslint-config-expo/flat.js";
import react from "./react.js";

const cleanedExpoConfig = expoConfig.map((config) => {
    if (!config.plugins) return config;
    const cleaned = { ...config, plugins: { ...config.plugins } };
    for (const plugin of ["import", "react-hooks"]) {
        delete cleaned.plugins[plugin];
    }
    return cleaned;
});

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [...cleanedExpoConfig, ...react];
