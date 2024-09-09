"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT_CONFIGS = void 0;
const globals_1 = require("globals");
const react_1 = require("./rules/react");
exports.REACT_CONFIGS = [
    react_1.REACT,
    react_1.REACT_HOOKS,
    react_1.STYLISTIC,
    {
        files: ["*.tsx"],
        rules: {
            // Checked by react/sort-comp
            "@typescript-eslint/member-ordering": "off",
            // Checked by typescript
            "react/prop-types": "off"
        }
    },
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals_1.browser
            }
        }
    }
];
