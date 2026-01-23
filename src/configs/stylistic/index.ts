import { importPackage } from "../../utils";
import { STYLISTIC } from "./stylistic";

import type { Config, Plugin, Preset } from "../../types";

export const STYLISTIC_PRESET: Preset = {
    name: "stylistic",
    async load(): Promise<Config[]>
    {
        return [
            {
                ...STYLISTIC,
                plugins: {
                    "@stylistic": await importPackage<Plugin>("@stylistic/eslint-plugin")
                }
            }
        ];
    }
};
