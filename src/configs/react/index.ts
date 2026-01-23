import { importPackage } from "../../utils";
import { PERFECTIONIST } from "./perfectionist";
import { REACT } from "./react";
import { REACT_HOOKS } from "./react-hooks";
import { STYLISTIC } from "./stylistic";

import type { Config, Plugin, Preset } from "../../types";

export const REACT_PRESET: Preset = {
    name: "react",
    async load(): Promise<Config[]>
    {
        return [
            {
                ...REACT,
                plugins: {
                    "react": await importPackage<Plugin>("eslint-plugin-react")
                }
            },
            {
                ...REACT_HOOKS,
                plugins: {
                    "react-hooks": await importPackage<Plugin>("eslint-plugin-react-hooks")
                }
            },
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
    }
};
