import globals from "globals";

import { NODE } from "./node";
import { importPackage } from "../../utils";

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
