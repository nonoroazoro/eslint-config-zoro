import { importPackage } from "../../utils";
import { STYLISTIC } from "./stylistic";

import type { Config, Plugin, Preset } from "../../types";

const DEPENDENCIES = ["@stylistic/eslint-plugin"];

export const STYLISTIC_PRESET: Preset = {
    name: "stylistic",
    dependencies: DEPENDENCIES,
    async load(): Promise<Config[]>
    {
        return [
            {
                ...STYLISTIC,
                plugins: {
                    "@stylistic": await importPackage<Plugin>(DEPENDENCIES[0])
                }
            }
        ];
    }
};
