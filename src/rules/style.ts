/**
 * http://eslint.org/docs/rules/#stylistic-issues
 */
export = {
    "rules": {
        "array-bracket-newline": "off",
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": "off",
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "camelcase": "off",
        "capitalized-comments": "off",
        "comma-dangle": "error",
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": "off",
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "func-name-matching": "off",
        "func-names": "warn",
        "func-style": "off",
        "function-paren-newline": ["error", "consistent"],
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "implicit-arrow-linebreak": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-double"],
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
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-lines-per-function": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "off",
        "multiline-comment-style": "off",
        "multiline-ternary": "off",
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "newIsCapExceptions": [],
                "capIsNew": false,
                "capIsNewExceptions": [
                    "Immutable.Map",
                    "Immutable.Set",
                    "Immutable.List"
                ]
            }
        ],
        "new-parens": "error",
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "off",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }],
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "off",
        "no-restricted-syntax": [
            "error",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "no-tabs": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "off",
        "object-curly-newline": "off",
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
        "one-var": ["error", "never"],
        "one-var-declaration-per-line": ["error", "always"],
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": "off",
        "prefer-object-spread": "off",
        "quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": false, "numbers": false }],
        "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "semi-spacing": ["error", { "before": false, "after": true }],
        "semi-style": ["error", "last"],
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "off",
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
        "switch-colon-spacing": ["error", { "after": true, "before": false }],
        "template-tag-spacing": ["error", "never"],
        "unicode-bom": ["error", "never"],
        "wrap-regex": "off"
    }
};
