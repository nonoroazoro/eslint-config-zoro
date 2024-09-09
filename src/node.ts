import { node } from "globals";
// @ts-ignore
import * as plugin from "eslint-plugin-node";

import { BEST_PRACTICES, POSSIBLE_ERRORS, STYLISTIC_ISSUES } from "./rules/node";
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
                ...node
            }
        },
        plugins: {
            node: plugin
        }
    }
];
