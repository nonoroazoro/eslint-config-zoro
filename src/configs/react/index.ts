import { PERFECTIONIST } from "./perfectionist";
import { REACT } from "./react";
import { REACT_HOOKS } from "./react-hooks";
import { STYLISTIC } from "./stylistic";

import type { Config } from "../../types";

export const REACT_CONFIGS: Config[] = [
    REACT,
    REACT_HOOKS,
    STYLISTIC,
    PERFECTIONIST,
    {
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        }
    }
];
