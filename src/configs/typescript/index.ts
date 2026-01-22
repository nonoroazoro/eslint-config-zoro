import { importPackage } from "../../utils";
import { TYPESCRIPT } from "./typescript";

import type { Config, Parser, Plugin, Preset } from "../../types";

const DEPENDENCIES = ["@typescript-eslint/parser", "@typescript-eslint/eslint-plugin"];

export const TYPESCRIPT_PRESET: Preset = {
    name: "typescript",
    dependencies: DEPENDENCIES,
    async load(): Promise<Config[]>
    {
        return [
            {
                ...TYPESCRIPT,
                languageOptions: {
                    parser: await importPackage<Parser>(DEPENDENCIES[0])
                },
                plugins: {
                    "@typescript-eslint": await importPackage<Plugin>(DEPENDENCIES[1])
                }
            },
            {
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
