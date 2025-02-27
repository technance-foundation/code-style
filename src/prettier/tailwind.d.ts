import { Config } from "prettier";
import { PluginOptions } from "prettier-plugin-tailwindcss";

interface PrettierTailwindOptions extends Config, PluginOptions {}

const prettierTailwind: PrettierTailwindOptions;

export default prettierTailwind;
