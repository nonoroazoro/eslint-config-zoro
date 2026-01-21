import plugin from "@stylistic/eslint-plugin";

import { GLOB_ALL } from "../../globs";

import type { Config } from "../../types/Config";

/**
 * See https://eslint.style/rules
 */
export const STYLISTIC: Config = {
    files: [GLOB_ALL],
    name: "zoro/stylistic",
    plugins: {
        "@stylistic": plugin
    },
    rules: {
        "@stylistic/array-bracket-newline": ["error", "consistent"],
        "@stylistic/array-bracket-spacing": ["error", "never"],
        "@stylistic/array-element-newline": ["error", "consistent"],
        "@stylistic/arrow-parens": ["error", "as-needed"],
        "@stylistic/arrow-spacing": ["error", { "after": true, "before": true }],
        "@stylistic/block-spacing": ["error", "always"],
        "@stylistic/brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/comma-spacing": ["error", { "after": true, "before": false }],
        "@stylistic/comma-style": ["error", "last"],
        "@stylistic/computed-property-spacing": ["error", "never"],
        "@stylistic/curly-newline": ["error", { "consistent": true, "multiline": true }],
        "@stylistic/dot-location": ["error", "property"],
        "@stylistic/eol-last": "error",
        "@stylistic/function-call-argument-newline": ["error", "consistent"],
        "@stylistic/function-call-spacing": ["error", "never"],
        "@stylistic/function-paren-newline": ["error", "consistent"],
        "@stylistic/generator-star-spacing": [
            "error",
            {
                "anonymous": "neither",
                "method": { "after": true, "before": false },
                "named": { "after": true, "before": false }
            }
        ],
        "@stylistic/implicit-arrow-linebreak": "off",
        "@stylistic/indent": ["error", 4, { "SwitchCase": 1 }],
        "@stylistic/indent-binary-ops": ["error", 4],
        "@stylistic/key-spacing": ["error", { "afterColon": true, "beforeColon": false }],
        "@stylistic/keyword-spacing": [
            "error",
            {
                "after": true,
                "before": true,
                "overrides": {
                    "case": { "after": true },
                    "return": { "after": true },
                    "throw": { "after": true }
                }
            }
        ],
        "@stylistic/line-comment-position": "off",
        "@stylistic/linebreak-style": "error",
        "@stylistic/lines-around-comment": [
            "error",
            {
                "allowArrayStart": true,
                "allowBlockStart": true,
                "allowClassStart": true,
                "allowEnumStart": true,
                "allowInterfaceStart": true,
                "allowModuleStart": true,
                "allowObjectStart": true,
                "allowTypeStart": true,
                "beforeBlockComment": true
            }
        ],
        "@stylistic/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "@stylistic/list-style": "off",
        "@stylistic/max-len": "off",
        "@stylistic/max-statements-per-line": "error",
        "@stylistic/member-delimiter-style": ["error", { "singleline": { "requireLast": true } }],
        "@stylistic/multiline-comment-style": "off",
        "@stylistic/multiline-ternary": ["error", "always-multiline"],
        "@stylistic/new-parens": "error",
        "@stylistic/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
        "@stylistic/no-confusing-arrow": ["error", { "allowParens": true }],
        "@stylistic/no-extra-parens": ["error", "functions"],
        "@stylistic/no-extra-semi": "error",
        "@stylistic/no-floating-decimal": "error",
        "@stylistic/no-mixed-operators": "error",
        "@stylistic/no-mixed-spaces-and-tabs": "error",
        "@stylistic/no-multi-spaces": "error",
        "@stylistic/no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }],
        "@stylistic/no-tabs": "error",
        "@stylistic/no-trailing-spaces": "error",
        "@stylistic/no-whitespace-before-property": "error",
        "@stylistic/nonblock-statement-body-position": ["error", "below"],
        "@stylistic/object-curly-newline": ["error", { "consistent": true, "multiline": true }],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "@stylistic/one-var-declaration-per-line": ["error", "always"],
        "@stylistic/operator-linebreak": ["error", "before", { "overrides": { "=": "after" } }],
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/padding-line-between-statements": "off",
        "@stylistic/quote-props": ["error", "as-needed", { "keywords": false, "numbers": false, "unnecessary": false }],
        "@stylistic/quotes": ["error", "double", { "allowTemplateLiterals": "always", "avoidEscape": true }],
        "@stylistic/rest-spread-spacing": ["error", "never"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/semi-spacing": ["error", { "after": true, "before": false }],
        "@stylistic/semi-style": ["error", "last"],
        "@stylistic/space-before-blocks": "error",
        "@stylistic/space-before-function-paren": ["error", { "anonymous": "always", "asyncArrow": "always", "catch": "always", "named": "never" }],
        "@stylistic/space-in-parens": ["error", "never"],
        "@stylistic/space-infix-ops": "error",
        "@stylistic/space-unary-ops": "error",
        "@stylistic/spaced-comment": [
            "error",
            "always",
            {
                "block": {
                    "balanced": true,
                    "exceptions": ["-", "+"],
                    "markers": ["=", "!"]
                },
                "line": {
                    "exceptions": ["-", "+"],
                    "markers": ["=", "!", "#region", "#endregion"]
                }
            }
        ],
        "@stylistic/switch-colon-spacing": ["error", { "after": true, "before": false }],
        "@stylistic/template-curly-spacing": "error",
        "@stylistic/template-tag-spacing": ["error", "never"],
        "@stylistic/type-annotation-spacing": [
            "error",
            {
                "after": true,
                "before": true,
                "overrides": {
                    "colon": {
                        "after": true,
                        "before": false
                    }
                }
            }
        ],
        "@stylistic/type-generic-spacing": "error",
        "@stylistic/type-named-tuple-spacing": "error",
        "@stylistic/wrap-iife": ["error", "outside", { "functionPrototypeMethods": false }],
        "@stylistic/wrap-regex": "off",
        "@stylistic/yield-star-spacing": ["error", "after"]
    }
};
