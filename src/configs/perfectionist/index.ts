import { importPackage } from "../../utils";
import { PERFECTIONIST } from "./perfectionist";

import type { Config, Plugin, Preset } from "../../types";

export const PERFECTIONIST_PRESET: Preset = {
    name: "perfectionist",
    async load(): Promise<Config[]>
    {
        return [
            {
                ...PERFECTIONIST,
                plugins: {
                    "perfectionist": await importPackage<Plugin>("eslint-plugin-perfectionist")
                }
            }
        ];
    }
};
