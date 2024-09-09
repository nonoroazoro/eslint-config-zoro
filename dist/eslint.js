"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Includes `ESLint` rules.
 */
exports.default = {
    "extends": [
        "./rules/eslint/layout-formatting",
        "./rules/eslint/possible-problems",
        "./rules/eslint/suggestions"
    ].map(path => require.resolve(path)),
    "env": {
        "browser": true
    }
};
