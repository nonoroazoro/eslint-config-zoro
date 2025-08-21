import type { Config } from "../../types";

/**
 * See https://github.com/eslint-community/eslint-plugin-n#-rules
 */
export const BEST_PRACTICES: Config = {
    rules: {
        "node/no-deprecated-api": "error"
    }
};
