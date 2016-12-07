/**
 * Modified ESLint Possible Errors.
 * http://eslint.org/docs/rules/#stylistic-issues
 */
module.exports = {
    "rules": {
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "camelcase": "off",
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
        "id-blacklist": "off",
        "id-length": "off",
        "id-match": "off",
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["error", {
            "before": true,
            "after": true,
            "overrides": {
                "return": { "after": true },
                "throw": { "after": true },
                "case": { "after": true }
            }
        }],
        "line-comment-position": "off",
        "linebreak-style": "off",
        "lines-around-comment": "off",
        "lines-around-directive": ["error", {
            before: "always",
            after: "always"
        }],
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements-per-line": "error",
        "max-statements": "off",
        "new-cap": ["error", {
            "newIsCap": true,
            "capIsNewExceptions": [
                "Router",
                "Immutable.Map",
                "Immutable.Set",
                "Immutable.List"
            ]
        }],
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 3 }],
        "no-array-constructor": "error",
        "no-bitwise": "warn",
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "off",
        "no-mixed-operators": ["error", {
            "groups": [
                ["+", "-", "*", "/", "%", "**"],
                ["&", "|", "^", "~", "<<", ">>", ">>>"],
                ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                ["&&", "||"],
                ["in", "instanceof"]
            ],
            "allowSamePrecedence": false
        }],
        "no-mixed-spaces-and-tabs": "error",
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
        "object-curly-newline": ["off", {
            "ObjectExpression": { "minProperties": 0, "multiline": true },
            "ObjectPattern": { "minProperties": 0, "multiline": true }
        }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
        "one-var-declaration-per-line": ["error", "always"],
        "one-var": ["error", "never"],
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": ["error", "never"],
        "quote-props": ["error", "as-needed", { "keywords": false, "unnecessary": false, "numbers": false }],
        "quotes": ["error", "double"],
        "require-jsdoc": "off",
        "semi-spacing": ["error", { "before": false, "after": true }],
        "semi": ["error", "always"],
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "off",
        "spaced-comment": ["error", "always", {
            line: {
                exceptions: ["-", "+"],
                markers: ["=", "!"]
            },
            block: {
                exceptions: ["-", "+"],
                markers: ["=", "!"],
                balanced: false
            }
        }],
        "unicode-bom": ["error", "never"],
        "wrap-regex": "off"
    }
};
