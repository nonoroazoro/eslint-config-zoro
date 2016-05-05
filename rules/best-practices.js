/**
 * Modified ESLint Best Practices.
 * http://eslint.org/docs/rules/#best-practices
 */
module.exports = {
    "rules": {
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "consistent-return": 2,
        "curly": 2,
        "default-case": [2, { "commentPattern": "^no default$" }],
        "eqeqeq": [2, "allow-null"],
        "guard-for-in": 2,
        "no-alert": 1,
        "no-caller": 2,
        "no-empty-function": [2, {
            "allow": [
                "arrowFunctions",
                "functions",
                "methods",
            ]
        }],
        "no-extra-label": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-multi-spaces": [2, { exceptions: { "Property": true, "VariableDeclarator": true, "ImportDeclaration": true } }],
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": [2, { "props": true }],
        "no-proto": 2,
        "no-redeclare": 2,
        "no-restricted-syntax": [
            2,
            "DebuggerStatement",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement",
        ],
        "no-return-assign": ["error", "always"],
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unsafe-finally": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 2,
        "wrap-iife": [2, "outside"],
        "yoda": 2
    }
};
