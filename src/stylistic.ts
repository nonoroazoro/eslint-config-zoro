import { browser } from "globals";

import { STYLISTIC } from "./rules/stylistic";

export const STYLISTIC_CONFIGS = [
    STYLISTIC,
    {
        languageOptions: {
            globals: {
                ...browser
            }
        }
    }
];
