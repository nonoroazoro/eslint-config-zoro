import type { Config } from "../../types";

/**
 * See https://github.com/mysticatea/eslint-plugin-node#possible-errors
 */
export const POSSIBLE_ERRORS: Config = {
    rules: {
        "node/handle-callback-err": "off",
        "node/no-callback-literal": "error",
        "node/no-exports-assign": "error",
        "node/no-extraneous-import": "error",
        "node/no-extraneous-require": "off",
        "node/no-missing-import": "off",
        "node/no-missing-require": "off",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-process-exit": "off",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
        "node/no-unsupported-features/es-builtins": "error",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-unsupported-features/node-builtins": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error"
    }
};
