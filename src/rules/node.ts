/**
 * https://github.com/mysticatea/eslint-plugin-node#-rules
 */
export = {
    "env": {
        "node": true
    },
    "plugins": [
        "node"
    ],
    "rules": {
        "node/callback-return": "off",
        "node/exports-style": "error",
        "node/file-extension-in-import": "off",
        "node/global-require": "error",
        "node/handle-callback-err": "off",
        "node/no-callback-literal": "error",
        "node/no-deprecated-api": "error",
        "node/no-exports-assign": "error",
        "node/no-extraneous-import": "error",
        "node/no-extraneous-require": "off",
        "node/no-missing-import": "error",
        "node/no-missing-require": "error",
        "node/no-mixed-requires": "off",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-process-env": "off",
        "node/no-process-exit": "off",
        "node/no-restricted-import": "off",
        "node/no-restricted-require": "off",
        "node/no-sync": "off",
        "node/no-unpublished-bin": "error",
        "node/no-unpublished-import": "off",
        "node/no-unpublished-require": "off",
        "node/no-unsupported-features/es-builtins": "error",
        "node/no-unsupported-features/es-syntax": "off",
        "node/no-unsupported-features/node-builtins": "error",
        "node/prefer-global/buffer": "error",
        "node/prefer-global/console": "error",
        "node/prefer-global/process": "error",
        "node/prefer-global/text-decoder": "error",
        "node/prefer-global/text-encoder": "error",
        "node/prefer-global/url-search-params": "error",
        "node/prefer-global/url": "error",
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error"
    },
    "ignorePatterns": ["*.jsx", "*.tsx"]
};
