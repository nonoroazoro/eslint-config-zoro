import globals from "globals";

import { importPackage } from "../../utils";
import { NODE } from "./node";

import type { Config, Plugin, Preset } from "../../types";

const DEPENDENCIES = ["eslint-plugin-n"];

export const NODE_PRESET: Preset = {
    name: "node",
    dependencies: DEPENDENCIES,
    async load(): Promise<Config[]>
    {
        return [
            {
                ...NODE,
                plugins: {
                    "n": await importPackage<Plugin>(DEPENDENCIES[0])
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
