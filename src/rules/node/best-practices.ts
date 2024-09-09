import type { Config } from "../../types";

/**
 * See https://github.com/mysticatea/eslint-plugin-node#best-practices
 */
export const BEST_PRACTICES: Config = {
    rules: {
        "node/no-deprecated-api": "error"
    }
};
