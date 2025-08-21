import globals from "globals";

import { REACT } from "./rules/react/react";
import { REACT_HOOKS } from "./rules/react/react-hooks";
import { STYLISTIC } from "./rules/react/stylistic";
import type { Config } from "./types";

export const REACT_CONFIGS: Config[] = [
    REACT,
    REACT_HOOKS,
    STYLISTIC,
    {
        files: ["**/*.?([cm])tsx"],
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
                ...globals.browser
            }
        }
    }
];
