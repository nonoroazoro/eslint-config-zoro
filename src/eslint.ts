import { browser } from "globals";

import { LAYOUT_FORMATTING, POSSIBLE_PROBLEMS, SUGGESTIONS } from "./rules/eslint";

export const ESLINT_CONFIGS = [
    LAYOUT_FORMATTING,
    POSSIBLE_PROBLEMS,
    SUGGESTIONS,
    {
        languageOptions: {
            globals: {
                ...browser
            }
        }
    }
];
