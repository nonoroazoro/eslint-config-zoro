import { browser } from "globals";

import { LAYOUT_FORMATTING, POSSIBLE_PROBLEMS, SUGGESTIONS } from "./rules/eslint";
import type { Config } from "./types";

export const ESLINT_CONFIGS: Config[] = [
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
