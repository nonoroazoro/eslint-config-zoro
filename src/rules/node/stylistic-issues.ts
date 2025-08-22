import type { Config } from "../../types";

/**
 * See https://github.com/eslint-community/eslint-plugin-n#-rules
 */
export const STYLISTIC_ISSUES: Config = {
    rules: {
        "n/callback-return": "off",
        "n/exports-style": "error",
        "n/file-extension-in-import": "off",
        "n/global-require": "off",
        "n/no-mixed-requires": "off",
        "n/no-process-env": "off",
        "n/no-restricted-import": "off",
        "n/no-restricted-require": "off",
        "n/no-sync": "off",
        "n/prefer-global/buffer": "error",
        "n/prefer-global/console": "error",
        "n/prefer-global/process": "error",
        "n/prefer-global/text-decoder": "error",
        "n/prefer-global/text-encoder": "error",
        "n/prefer-global/url-search-params": "error",
        "n/prefer-global/url": "error",
        "n/prefer-promises/dns": "error",
        "n/prefer-promises/fs": "error"
    }
};
