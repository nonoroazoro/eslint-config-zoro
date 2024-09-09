"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STYLISTIC_CONFIGS = void 0;
const globals_1 = require("globals");
const stylistic_1 = require("./rules/stylistic");
exports.STYLISTIC_CONFIGS = [
    stylistic_1.STYLISTIC,
    {
        languageOptions: {
            globals: {
                ...globals_1.browser
            }
        }
    }
];
