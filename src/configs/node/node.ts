import plugin from "eslint-plugin-n";

import { GLOB_JS, GLOB_TS } from "../../constants";

import type { Config } from "../../types";

/**
 * See https://github.com/eslint-community/eslint-plugin-n#-rules
 */
export const NODE: Config = {
    files: [GLOB_JS, GLOB_TS],
    name: "zoro/node",
    plugins: {
        "n": plugin
    },
    rules: {
        "n/callback-return": "off",
        "n/exports-style": "error",
        "n/file-extension-in-import": "off",
        "n/global-require": "off",
        "n/handle-callback-err": "off",
        "n/hashbang": "off",
        "n/no-callback-literal": "error",
        "n/no-deprecated-api": "error",
        "n/no-exports-assign": "error",
        "n/no-extraneous-import": "error",
        "n/no-extraneous-require": "off",
        "n/no-missing-import": "off",
        "n/no-missing-require": "off",
        "n/no-mixed-requires": "off",
        "n/no-new-require": "error",
        "n/no-path-concat": "error",
        "n/no-process-env": "off",
        "n/no-process-exit": "off",
        "n/no-restricted-import": "off",
        "n/no-restricted-require": "off",
        "n/no-sync": "off",
        "n/no-top-level-await": "error",
        "n/no-unpublished-bin": "error",
        "n/no-unpublished-import": "off",
        "n/no-unpublished-require": "off",
        "n/no-unsupported-features/es-builtins": "error",
        "n/no-unsupported-features/es-syntax": "off",
        "n/no-unsupported-features/node-builtins": "error",
        "n/prefer-global/buffer": "error",
        "n/prefer-global/console": "error",
        "n/prefer-global/process": "error",
        "n/prefer-global/text-decoder": "error",
        "n/prefer-global/text-encoder": "error",
        "n/prefer-global/url": "error",
        "n/prefer-global/url-search-params": "error",
        "n/prefer-node-protocol": "error",
        "n/prefer-promises/dns": "error",
        "n/prefer-promises/fs": "error",
        "n/process-exit-as-throw": "error",
        "n/shebang": "error"
    }
};
