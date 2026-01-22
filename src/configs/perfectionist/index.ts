import { importPackage } from "../../utils";
import { PERFECTIONIST } from "./perfectionist";

import type { Config, Plugin, Preset } from "../../types";

const DEPENDENCIES = ["eslint-plugin-perfectionist"];

export const PERFECTIONIST_PRESET: Preset = {
    name: "perfectionist",
    dependencies: DEPENDENCIES,
    async load(): Promise<Config[]>
    {
        return [
            {
                ...PERFECTIONIST,
                plugins: {
                    "perfectionist": await importPackage<Plugin>(DEPENDENCIES[0])
                }
            }
        ];
    }
};
