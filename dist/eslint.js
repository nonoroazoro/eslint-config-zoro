"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ESLINT_CONFIGS = void 0;
const globals_1 = require("globals");
const eslint_1 = require("./rules/eslint");
exports.ESLINT_CONFIGS = [
    eslint_1.LAYOUT_FORMATTING,
    eslint_1.POSSIBLE_PROBLEMS,
    eslint_1.SUGGESTIONS,
    {
        languageOptions: {
            globals: {
                ...globals_1.browser
            }
        }
    }
];
