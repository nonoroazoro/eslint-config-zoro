import * as globals from "globals";

import { ESLINT_CONFIGS } from "./dist/eslint.js";
import { STYLISTIC_CONFIGS } from "./dist/stylistic.js";
import { TYPESCRIPT_CONFIGS } from "./dist/typescript.js";

export default [
    ...ESLINT_CONFIGS,
    ...STYLISTIC_CONFIGS,
    ...TYPESCRIPT_CONFIGS,
    {
        ignores: [
            "dist/*",
            "eslint.js",
            "index.js",
            "jest.config.js",
            "react.js",
            "stylistic.js",
            "typescript.js"
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
