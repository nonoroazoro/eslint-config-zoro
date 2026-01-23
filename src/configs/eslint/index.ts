import globals from "globals";

import { LAYOUT_FORMATTING } from "./layout-formatting";
import { POSSIBLE_PROBLEMS } from "./possible-problems";
import { SUGGESTIONS } from "./suggestions";

import type { Preset } from "../../types";

export const ESLINT_PRESET: Preset = {
    name: "eslint",
    load()
    {
        return [
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
    }
};
