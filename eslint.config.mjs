import globals from "globals";

import * as eslint from "./dist/eslint.js";
import * as node from "./dist/node.js";
import * as stylistic from "./dist/stylistic.js";
import * as typescript from "./dist/typescript.js";

export default [
    ...node.NODE_CONFIGS,
    ...eslint.ESLINT_CONFIGS,
    ...stylistic.STYLISTIC_CONFIGS,
    ...typescript.TYPESCRIPT_CONFIGS,
    {
        ignores: [
            "dist/*",
            "jest.config.js"
        ]
    },
    {
        languageOptions: {
            globals: {
                ...globals.jest
            },
            parserOptions: {
                project: "./tsconfig.eslint.json"
            }
        }
    }
];
