import type { Config } from "../../types";

/**
 * See https://eslint.org/docs/latest/rules/#possible-problems
 */
export const POSSIBLE_PROBLEMS: Config = {
    rules: {
        "array-callback-return": "error",
        "constructor-super": "error",
        "for-direction": "off",
        "getter-return": "error",
        "no-async-promise-executor": "off",
        "no-await-in-loop": "off",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-binary-expression": "error",
        "no-constant-condition": ["warn", { "checkLoops": false }],
        "no-constructor-return": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-misleading-character-class": "off",
        "no-new-native-nonconstructor": "error",
        "no-obj-calls": "error",
        "no-promise-executor-return": "error",
        "no-prototype-builtins": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-setter-return": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "off",
        "no-unmodified-loop-condition": "off",
        "no-unreachable-loop": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unsafe-optional-chaining": "error",
        "no-unused-private-class-members": "warn",
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        "no-use-before-define": ["error", { "functions": false, "classes": false }],
        "no-useless-assignment": "warn",
        "no-useless-backreference": "error",
        "require-atomic-updates": "off",
        "use-isnan": "error",
        "valid-typeof": ["error", { "requireStringLiterals": true }]
    }
};
