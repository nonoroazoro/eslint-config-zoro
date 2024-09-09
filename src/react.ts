import { browser } from "globals";

import { REACT, REACT_HOOKS, STYLISTIC } from "./rules/react";

export const REACT_CONFIGS = [
    REACT,
    REACT_HOOKS,
    STYLISTIC,
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
