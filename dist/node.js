"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NODE_CONFIGS = void 0;
const globals_1 = require("globals");
// @ts-ignore
const plugin = require("eslint-plugin-node");
const node_1 = require("./rules/node");
exports.NODE_CONFIGS = [
    node_1.BEST_PRACTICES,
    node_1.POSSIBLE_ERRORS,
    node_1.STYLISTIC_ISSUES,
    {
        ignores: [
            "*.jsx",
            "*.tsx"
        ],
        languageOptions: {
            globals: {
                ...globals_1.node
            }
        },
        plugins: {
            node: plugin
        }
    }
];
