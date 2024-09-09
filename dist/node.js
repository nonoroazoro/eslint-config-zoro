"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Includes `Node` rules.
 */
exports.default = {
    "extends": [
        "./rules/node/best-practices",
        "./rules/node/possible-errors",
        "./rules/node/stylistic-issues"
    ].map(path => require.resolve(path)),
    "env": {
        "node": true
    },
    "ignores": [
        "*.jsx",
        "*.tsx"
    ],
    "plugins": [
        "node"
    ]
};
