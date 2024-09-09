"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Includes `all` rules.
 */
exports.default = {
    "extends": [
        "./eslint",
        "./node",
        "./react",
        "./stylistic",
        "./typescript"
    ].map(path => require.resolve(path))
};
