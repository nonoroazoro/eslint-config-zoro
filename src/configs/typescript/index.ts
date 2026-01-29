import { TYPESCRIPT } from "./typescript";
import { GLOB_DTS, GLOB_TS, GLOB_TSX } from "../../globs";
import { importPackage } from "../../utils";

import type { Config, Parser, Plugin, Preset } from "../../types";

export const TYPESCRIPT_PRESET: Preset = {
    name: "typescript",
    async load(): Promise<Config[]>
    {
        return [
            {
                languageOptions: {
                    parser: await importPackage<Parser>("@typescript-eslint/parser")
                }
            },
            {
                ...TYPESCRIPT,
                plugins: {
                    "@typescript-eslint": await importPackage<Plugin>("@typescript-eslint/eslint-plugin")
                }
            },
            {
                files: [GLOB_TS, GLOB_TSX],
                ignores: [GLOB_DTS],
                rules: {
                    // Checked by @typescript-eslint
                    "default-case": "off",
                    "default-param-last": "off",
                    "no-loop-func": "off",
                    "no-shadow": "off",
                    "no-unused-expressions": "off",
                    "no-unused-private-class-members": "off",
                    "no-unused-vars": "off",
                    "no-use-before-define": "off",
                    "no-useless-constructor": "off",
                    "prefer-promise-reject-errors": "off",

                    // Checked by Typescript
                    "constructor-super": "off",
                    "getter-return": "off",
                    "no-const-assign": "off",
                    "no-dupe-args": "off",
                    "no-dupe-class-members": "off",
                    "no-dupe-keys": "off",
                    "no-func-assign": "off",
                    "no-new-native-nonconstructor": "off",
                    "no-obj-calls": "off",
                    "no-redeclare": "off",
                    "no-this-before-super": "off",
                    "no-undef": "off",
                    "no-unreachable": "off",
                    "no-unsafe-negation": "off",
                    "valid-typeof": "off"
                }
            }
        ];
    }
};
