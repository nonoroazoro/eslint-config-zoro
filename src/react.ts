import { browser } from "globals";

import { REACT, REACT_HOOKS, STYLISTIC } from "./rules/react";

export const REACT_CONFIGS = [
    REACT,
    REACT_HOOKS,
    STYLISTIC,
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
                ...browser
            }
        }
    }
];
