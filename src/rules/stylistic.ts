import plugin from "@stylistic/eslint-plugin";

import type { Config } from "../types/Config";

/**
 * See https://eslint.style/rules
 */
export const STYLISTIC: Config = {
    plugins: {
        "@stylistic": plugin
    },
    rules: {
        "@stylistic/array-bracket-newline": ["error", "consistent"],
        "@stylistic/array-bracket-spacing": ["error", "never"],
        "@stylistic/array-element-newline": ["error", "consistent"],
        "@stylistic/arrow-parens": ["error", "as-needed"],
        "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
        "@stylistic/block-spacing": ["error", "always"],
        "@stylistic/brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
        "@stylistic/comma-style": ["error", "last"],
        "@stylistic/computed-property-spacing": ["error", "never"],
        "@stylistic/curly-newline": ["error", { "multiline": true, "consistent": true }],
        "@stylistic/dot-location": "error",
        "@stylistic/eol-last": "error",
        "@stylistic/function-call-argument-newline": ["error", "consistent"],
        "@stylistic/function-call-spacing": ["error", "never"],
        "@stylistic/function-paren-newline": ["error", "consistent"],
        "@stylistic/generator-star-spacing": "error",
        "@stylistic/implicit-arrow-linebreak": "off",
        "@stylistic/indent": ["error", 4, { "SwitchCase": 1 }],
        "@stylistic/indent-binary-ops": ["error", 4],
        "@stylistic/key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "@stylistic/keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true,
                "overrides": {
                    "return": { "after": true },
                    "throw": { "after": true },
                    "case": { "after": true }
                }
            }
        ],
        "@stylistic/line-comment-position": "off",
        "@stylistic/linebreak-style": "error",
        "@stylistic/lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "allowBlockStart": true,
                "allowObjectStart": true,
                "allowArrayStart": true,
                "allowClassStart": true,
                "allowEnumStart": true,
                "allowInterfaceStart": true,
                "allowModuleStart": true,
                "allowTypeStart": true
            }
        ],
        "@stylistic/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "@stylistic/max-len": "off",
        "@stylistic/max-statements-per-line": "error",
        "@stylistic/member-delimiter-style": "error",
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
        "@stylistic/object-curly-newline": ["error", { "multiline": true, "consistent": true }],
        "@stylistic/object-curly-spacing": ["error", "always"],
        "@stylistic/object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "@stylistic/one-var-declaration-per-line": ["error", "always"],
        "@stylistic/operator-linebreak": ["error", "before"],
        "@stylistic/padded-blocks": ["error", "never"],
        "@stylistic/padding-line-between-statements": "off",
        "@stylistic/quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": false, "numbers": false }],
        "@stylistic/quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": "always" }],
        "@stylistic/rest-spread-spacing": ["error", "never"],
        "@stylistic/semi": ["error", "always"],
        "@stylistic/semi-spacing": ["error", { "before": false, "after": true }],
        "@stylistic/semi-style": ["error", "last"],
        "@stylistic/space-before-blocks": "error",
        "@stylistic/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always", "catch": "always" }],
        "@stylistic/space-in-parens": ["error", "never"],
        "@stylistic/space-infix-ops": "error",
        "@stylistic/space-unary-ops": "error",
        "@stylistic/spaced-comment": [
            "error",
            "always",
            {
                "line": {
                    "exceptions": ["-", "+"],
                    "markers": ["=", "!", "#region", "#endregion"]
                },
                "block": {
                    "exceptions": ["-", "+"],
                    "markers": ["=", "!"],
                    "balanced": true
                }
            }
        ],
        "@stylistic/switch-colon-spacing": ["error", { "before": false, "after": true }],
        "@stylistic/template-curly-spacing": "error",
        "@stylistic/template-tag-spacing": ["error", "never"],
        "@stylistic/type-annotation-spacing": ["error", { "before": false, "after": true }],
        "@stylistic/type-generic-spacing": "error",
        "@stylistic/type-named-tuple-spacing": "error",
        "@stylistic/wrap-iife": ["error", "outside", { "functionPrototypeMethods": false }],
        "@stylistic/wrap-regex": "off",
        "@stylistic/yield-star-spacing": ["error", "after"]
    }
};
