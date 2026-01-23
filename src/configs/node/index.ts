import globals from "globals";

import { importPackage } from "../../utils";
import { NODE } from "./node";

import type { Config, Plugin, Preset } from "../../types";

export const NODE_PRESET: Preset = {
    name: "node",
    async load(): Promise<Config[]>
    {
        return [
            {
                ...NODE,
                plugins: {
                    "n": await importPackage<Plugin>("eslint-plugin-n")
                }
            },
            {
                languageOptions: {
                    globals: {
                        ...globals.node
                    }
                }
            }
        ];
    }
};
