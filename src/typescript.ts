import globals from "globals";

import { TYPESCRIPT } from "./rules/typescript";
import type { Config } from "./types";

export const TYPESCRIPT_CONFIGS: Config[] = [
    TYPESCRIPT,
    {
        files: ["**/*.?([cm])ts", "**/*.?([cm])tsx"],
        rules: {
            // Checked by @typescript-eslint
            "default-param-last": "off",
            "no-loop-func": "off",
            "no-shadow": "off",
            "no-unused-expressions": "off",
            "no-unused-private-class-members": "off",
            "no-unused-vars": "off",
            "no-use-before-define": "off",
            "no-useless-constructor": "off",
            "prefer-promise-reject-errors": "off",

            // Checked by Typescript - ts(2335) & ts(2377)
            "constructor-super": "off",

            // Checked by Typescript - ts(2378)
            "getter-return": "off",

            // Checked by Typescript - ts(2588)
            "no-const-assign": "off",

            // Checked by Typescript - ts(2300)
            "no-dupe-args": "off",

            // Checked by @typescript-eslint & ts(2393) & ts(2300)
            "no-dupe-class-members": "off",

            // Checked by Typescript - ts(1117)
            "no-dupe-keys": "off",

            // Checked by Typescript - ts(2539)
            "no-func-assign": "off",

            // Checked by Typescript - ts(2588)
            "no-new-symbol": "off",

            // Checked by Typescript - ts(2349)
            "no-obj-calls": "off",

            // Checked by Typescript - ts(2451)
            "no-redeclare": "off",

            // Checked by Typescript - ts(2376)
            "no-this-before-super": "off",

            // Checked by Typescript - `strictNullChecks` ts(2304)
            "no-undef": "off",

            // Checked by Typescript - ts(7027)
            "no-unreachable": "off",

            // Checked by Typescript - ts(2365) & ts(2360) & ts(2358)
            "no-unsafe-negation": "off",

            // Checked by Typescript - ts(2367)
            "valid-typeof": "off"
        }
    },
    {
        files: ["**/*.?([cm])js", "**/*.?([cm])jsx"],
        rules: {
            // Disabled in vanilla JavaScript files
            "@typescript-eslint/no-shadow": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/restrict-template-expressions": "off"
        }
    },
    {
        files: ["**/*.d.ts"],
        rules: {
            // Disabled in TypeScript declaration files
            "no-var": "off"
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    }
];
