import type { Config } from "../../types";

/**
 * See https://github.com/eslint-community/eslint-plugin-n#-rules
 */
export const POSSIBLE_ERRORS: Config = {
    rules: {
        "n/handle-callback-err": "off",
        "n/no-callback-literal": "error",
        "n/no-exports-assign": "error",
        "n/no-extraneous-import": "error",
        "n/no-extraneous-require": "off",
        "n/no-missing-import": "off",
        "n/no-missing-require": "off",
        "n/no-new-require": "error",
        "n/no-path-concat": "error",
        "n/no-process-exit": "off",
        "n/no-unpublished-bin": "error",
        "n/no-unpublished-import": "off",
        "n/no-unpublished-require": "off",
        "n/no-unsupported-features/es-builtins": "error",
        "n/no-unsupported-features/es-syntax": "off",
        "n/no-unsupported-features/node-builtins": "error",
        "n/process-exit-as-throw": "error",
        "n/shebang": "error"
    }
};
