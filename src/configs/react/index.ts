import { importPackage } from "../../utils";
import { PERFECTIONIST } from "./perfectionist";
import { REACT } from "./react";
import { REACT_HOOKS } from "./react-hooks";
import { STYLISTIC } from "./stylistic";

import type { Config, Plugin, Preset } from "../../types";

const DEPENDENCIES = ["eslint-plugin-react", "eslint-plugin-react-hooks"];

export const REACT_PRESET: Preset = {
    name: "react",
    dependencies: DEPENDENCIES,
    async load(): Promise<Config[]>
    {
        return [
            {
                ...REACT,
                plugins: {
                    "react": await importPackage<Plugin>(DEPENDENCIES[0])
                }
            },
            {
                ...REACT_HOOKS,
                plugins: {
                    "react-hooks": await importPackage<Plugin>(DEPENDENCIES[1])
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
