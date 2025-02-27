import { Config } from "prettier";
import { PluginOptions } from "prettier-plugin-tailwindcss";

export interface PrettierTailwindOptions extends Config, PluginOptions {}

const prettierTailwind: PrettierTailwindOptions;

export default prettierTailwind;
