import type { Config } from "../../types";

/**
 * https://eslint.org/docs/latest/rules/#layout--formatting
 */
export const LAYOUT_FORMATTING: Config = {
    name: "zoro/eslint/layout-formatting",
    rules: {
        "unicode-bom": "error"
    }
};
