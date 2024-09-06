import stylistic from '@stylistic/eslint-plugin'

/**
 * See https://eslint.style/rules
 */
export default {
    "plugins": {
        '@stylistic': stylistic
    },
    "rules": {
        "array-bracket-newline": ["error", "consistent"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "computed-property-spacing": ["error", "never"],
        "comma-style": ["error", "last"],
        "dot-location": "error",
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "function-call-argument-newline": ["error", "consistent"],
        "function-call-spacing": ["error", "never"],
        "function-paren-newline": ["error", "consistent"],
        "generator-star-spacing": "error",
        "implicit-arrow-linebreak": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "indent-binary-ops": ["error", 4],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": [
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
        "line-comment-position": "off",
        "linebreak-style": "error",
        "lines-around-comment": ["error", { "beforeBlockComment": true }],
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "max-len": "off",
        "max-statements-per-line": "error",
        "member-delimiter-style": "error",
        "multiline-comment-style": "error",
        "multiline-ternary": ["error", "always-multiline"],
        "new-parens": "error",
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
        "no-confusing-arrow": ["error", { "allowParens": true }],
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-floating-decimal": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": ["error", "below"],
        "object-curly-newline": ["error", { "multiline": true, "consistent": true }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
        "one-var-declaration-per-line": ["error", "always"],
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": "off",
        "quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": false, "numbers": false }],
        "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "semi-style": ["error", "last"],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": [
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
        "switch-colon-spacing": ["error", { "before": false, "after": true }],
        "template-curly-spacing": "error",
        "template-tag-spacing": ["error", "never"],
        "type-annotation-spacing": ["error", { "before": false, "after": true }],
        "type-generic-spacing": "error",
        "type-named-tuple-spacing": "error",
        "wrap-iife": ["error", "outside", { "functionPrototypeMethods": false }],
        "wrap-regex": "off",
        "yield-star-spacing": ["error", "after"]
    }
}
