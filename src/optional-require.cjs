/**
 * Only require path if all of it's required peer dependencies exists
 *
 * @param path {string} - path to import file
 * @param peers {string|string[]} - one or an array of required peer dependencies
 */
module.exports = {
    optionalRequire: function (path, peers) {
        let mod = undefined;
        if (typeof peers === "string") {
            peers = [peers];
        }

        try {
            // Only import tailwind configs if the peer dependency exists
            for (const peer of peers) {
                require.resolve(peer);
            }
            mod = require(path);
        } catch (error) {
            if (error.code !== "ERR_MODULE_NOT_FOUND" && error.code !== "MODULE_NOT_FOUND") {
                throw error;
            }
        }
        return mod;
    },
};
