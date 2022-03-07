/**
 * http://eslint.org/docs/rules/#best-practices
 */
export = {
    "rules": {
        "accessor-pairs": "off",
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "class-methods-use-this": "off",
        "complexity": "off",
        "consistent-return": "off",
        "curly": "error",
        "default-case-last": "error",
        "default-case": ["error", { "commentPattern": "^no default$" }],
        "default-param-last": "error",
        "dot-location": "off",
        "dot-notation": "off",
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        "guard-for-in": "error",
        "max-classes-per-file": "error",
        "no-alert": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-div-regex": "off",
        "no-else-return": "off",
        "no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods"
                ]
            }
        ],
        "no-empty-pattern": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-restricted-properties": [
            "error",
            {
                "object": "arguments",
                "property": "callee",
                "message": "arguments.callee is deprecated."
            },
            {
                "property": "__defineGetter__",
                "message": "Please use Object.defineProperty instead."
            },
            {
                "property": "__defineSetter__",
                "message": "Please use Object.defineProperty instead."
            }
        ],
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-script-url": "off",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "off",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": false,
                "allowTaggedTemplates": false,
                "allowTernary": false
            }
        ],
        "no-unused-labels": "error",
        "no-unused-private-class-members": "warn",
        "no-useless-call": "off",
        "no-useless-catch": "off",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "off",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "prefer-named-capture-group": "off",
        "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
        "prefer-reflect": "off",
        "prefer-regex-literals": "error",
        "radix": "error",
        "require-await": "off",
        "require-unicode-regexp": "off",
        "vars-on-top": "error",
        "wrap-iife": ["error", "outside", { "functionPrototypeMethods": false }],
        "yoda": "error"
    }
};
