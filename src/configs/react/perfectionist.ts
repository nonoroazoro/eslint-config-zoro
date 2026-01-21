import plugin from "@stylistic/eslint-plugin";

import { GLOB_JSX, GLOB_TSX } from "../../constants/globs";

import type { Config } from "../../types/Config";

/**
 * See https://perfectionist.dev/rules
 */
export const PERFECTIONIST: Config = {
    files: [GLOB_JSX, GLOB_TSX],
    name: "zoro/react/perfectionist",
    plugins: {
        "perfectionist": plugin
    },
    rules: {
        "perfectionist/sort-jsx-props": "error"
    }
};
