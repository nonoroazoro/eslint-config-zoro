import globals from "globals";

import { LAYOUT_FORMATTING } from "./rules/eslint/layout-formatting";
import { POSSIBLE_PROBLEMS } from "./rules/eslint/possible-problems";
import { SUGGESTIONS } from "./rules/eslint/suggestions";
import type { Config } from "./types";

export const ESLINT_CONFIGS: Config[] = [
    LAYOUT_FORMATTING,
    POSSIBLE_PROBLEMS,
    SUGGESTIONS,
    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    }
];
