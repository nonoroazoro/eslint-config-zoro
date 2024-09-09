"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPESCRIPT_CONFIGS = void 0;
const globals_1 = require("globals");
const typescript_1 = require("./rules/typescript");
exports.TYPESCRIPT_CONFIGS = [
    typescript_1.TYPESCRIPT,
    {
        files: ["*.ts", "*.tsx"],
        rules: {
            // Checked by @typescript-eslint
            "consistent-return": "off",
            // Checked by @typescript-eslint
            "default-param-last": "off",
            // Checked by @typescript-eslint
            "no-duplicate-imports": "off",
            // Checked by @typescript-eslint
            "no-empty-function": "off",
            // Checked by @typescript-eslint
            "no-loop-func": "off",
            // Checked by @typescript-eslint
            "no-shadow": "off",
            // Checked by @typescript-eslint/only-throw-error
            "no-throw-literal": "off",
            // Checked by @typescript-eslint
            "no-unused-expressions": "off",
            // Checked by @typescript-eslint
            "no-unused-vars": "off",
            // Checked by @typescript-eslint
            "no-use-before-define": "off",
            // Checked by @typescript-eslint
            "no-useless-constructor": "off",
            // Checked by @typescript-eslint
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
        files: ["*.js", "*.jsx"],
        rules: {
            // Disabled in vanilla JavaScript files
            "@typescript-eslint/no-shadow": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/restrict-template-expressions": "off"
        }
    },
    {
        languageOptions: {
            globals: {
                ...globals_1.browser
            }
        }
    }
];
