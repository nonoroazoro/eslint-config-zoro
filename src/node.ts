import globals from "globals";
import plugin from "eslint-plugin-n";

import { BEST_PRACTICES } from "./rules/node/best-practices";
import { POSSIBLE_ERRORS } from "./rules/node/possible-errors";
import { STYLISTIC_ISSUES } from "./rules/node/stylistic-issues";
import type { Config } from "./types";

export const NODE_CONFIGS: Config[] = [
    BEST_PRACTICES,
    POSSIBLE_ERRORS,
    STYLISTIC_ISSUES,
    {
        ignores: [
            "*.jsx",
            "*.tsx"
        ],
        languageOptions: {
            globals: {
                ...globals.node
            }
        },
        plugins: {
            n: plugin
        }
    }
];
