import globals from "globals";

import { NODE } from "./node";

import type { Config } from "../../types";

export const NODE_CONFIGS: Config[] = [
    NODE,
    {
        languageOptions: {
            globals: {
                ...globals.node
            }
        }
    }
];
