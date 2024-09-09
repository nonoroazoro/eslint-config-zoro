import type { Config } from "../../types";

/**
 * https://eslint.org/docs/latest/rules/#layout--formatting
 */
export const LAYOUT_FORMATTING: Config = {
    rules: {
        "unicode-bom": ["error", "never"]
    }
};
