import { browser } from "globals";

import { STYLISTIC } from "./rules/stylistic";
import type { Config } from "./types";

export const STYLISTIC_CONFIGS: Config[] = [
    STYLISTIC,
    {
        languageOptions: {
            globals: {
                ...browser
            }
        }
    }
];
