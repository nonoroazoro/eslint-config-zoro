﻿module.exports = {
    "rules": {
        "array-bracket-spacing": [2, "never"],
        "block-spacing": [2, "always"],
        "brace-style": [2, "allman", { "allowSingleLine": true }],
        "camelcase": 0,
        "comma-spacing": [2, { "before": false, "after": true }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "consistent-this": 0,
        "eol-last": 2,
        "func-names": 1,
        "func-style": 0,
        "id-blacklist": 0,
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, { "SwitchCase": 1 }],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": [2, {
            "before": true,
            "after": true,
            "overrides": {
                "return": { "after": true },
                "throw": { "after": true },
                "case": { "after": true }
            }
        }],
        "linebreak-style": 0,
        "lines-around-comment": 0,
        "max-depth": 0,
        "max-len": 0,
        "max-nested-callbacks": 0,
        "max-params": 0,
        "max-statements": 0,
        "max-statements-per-line": 2,
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNewExceptions": [
                "Router"
            ]
        }],
        "new-parens": 2,
        "newline-after-var": 0,
        "newline-before-return": 0,
        "newline-per-chained-call": [2, { "ignoreChainWithDepth": 3 }],
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 0,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [1, { "max": 2, "maxEOF": 1 }],
        "no-negated-condition": 0,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-restricted-syntax": [
            2,
            "DebuggerStatement",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement",
        ],
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-spacing": [2, "always"],
        "one-var": [2, "never"],
        "one-var-declaration-per-line": [2, "always"],
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": [2, "never"],
        "quote-props": [2, "as-needed", { "keywords": false, "unnecessary": false, "numbers": false }],
        "quotes": [2, "double"],
        "require-jsdoc": 0,
        "semi": [2, "always"],
        "semi-spacing": [2, { "before": false, "after": true }],
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": 0,
        "spaced-comment": [2, "always", {
            "exceptions": ["-", "+"],
            "markers": ["=", "!"]
        }],
        "wrap-regex": 0
    }
};
