import globals from "globals";

import { STYLISTIC } from "./rules/stylistic";
import type { Config } from "./types";

export const STYLISTIC_CONFIGS: Config[] = [
    {
        ...STYLISTIC,
        files: ["**/*.?([cm])[jt]s", "**/*.?([cm])[jt]sx"]
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    }
];
