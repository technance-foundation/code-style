import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @returns {string} Path to the Biome configuration file
 */
export default resolve(__dirname, "biome.jsonc");
