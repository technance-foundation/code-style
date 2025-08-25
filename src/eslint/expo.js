import expoConfig from "eslint-config-expo/flat";

import react from "./react.js";

/** @type {import('eslint').Linter.Config[] | import("typescript-eslint").ConfigArray} */
export default [...react, ...expoConfig];
