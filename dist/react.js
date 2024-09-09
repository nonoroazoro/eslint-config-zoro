"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Includes `React` rules.
 */
exports.default = {
    "extends": [
        "./rules/react/react-hooks",
        "./rules/react/react",
        "./rules/react/stylistic"
    ].map(path => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
