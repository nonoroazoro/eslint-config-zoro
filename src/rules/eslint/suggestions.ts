import type { Config } from "../../types";

/**
 * See https://eslint.org/docs/latest/rules/#suggestions
 */
export const SUGGESTIONS: Config = {
    rules: {
        "accessor-pairs": "off",
        "arrow-body-style": "off",
        "block-scoped-var": "error",
        "camelcase": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "off",
        "complexity": "off",
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "error",
        "default-case-last": "error",
        "default-case": ["error", { "commentPattern": "^no default$" }],
        "default-param-last": "error",
        "dot-notation": "off",
        "eqeqeq": ["error", "always", { "null": "ignore" }],
        "func-name-matching": "off",
        "func-names": "warn",
        "func-style": "off",
        "grouped-accessor-pairs": ["off", "getBeforeSet"],
        "guard-for-in": "error",
        "id-denylist": "off",
        "id-length": "off",
        "id-match": "off",
        "init-declarations": "off",
        "logical-assignment-operators": ["error", "never"],
        "max-classes-per-file": "error",
        "max-depth": "off",
        "max-lines-per-function": "off",
        "max-lines": "off",
        "max-nested-callbacks": "off",
        "max-params": "off",
        "max-statements": "off",
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
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-console": "warn",
        "no-continue": "off",
        "no-delete-var": "error",
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
        "no-empty-static-block": "error",
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-boolean-cast": "off",
        "no-extra-label": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "off",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "off",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "off",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-multi-assign": "error",
        "no-multi-str": "error",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-nonoctal-decimal-escape": "error",
        "no-object-constructor": "error",
        "no-octal-escape": "error",
        "no-octal": "error",
        "no-param-reassign": "error",
        "no-plusplus": "off",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-restricted-exports": "error",
        "no-restricted-globals": "off",
        "no-restricted-imports": "off",
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
        "no-restricted-syntax": [
            "error",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "no-return-assign": ["error", "always"],
        "no-script-url": "off",
        "no-sequences": "error",
        "no-shadow-restricted-names": "error",
        "no-shadow": "error",
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": false,
                "allowTaggedTemplates": false,
                "allowTernary": false
            }
        ],
        "no-unused-labels": "error",
        "no-useless-call": "off",
        "no-useless-catch": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "error",
        "no-useless-rename": [
            "error",
            {
                "ignoreDestructuring": false,
                "ignoreImport": false,
                "ignoreExport": false
            }
        ],
        "no-useless-return": "off",
        "no-var": "error",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        "object-shorthand": [
            "error",
            "always",
            {
                "ignoreConstructors": false,
                "avoidQuotes": true
            }
        ],
        "one-var": ["error", "never"],
        "operator-assignment": "off",
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": false,
                "allowUnboundThis": true
            }
        ],
        "prefer-const": "error",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "off",
        "prefer-named-capture-group": "off",
        "prefer-numeric-literals": "error",
        "prefer-object-has-own": "error",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "radix": "error",
        "require-await": "off",
        "require-unicode-regexp": "error",
        "require-yield": "error",
        "sort-imports": "off",
        "sort-keys": "off",
        "sort-vars": "off",
        "strict": ["error", "never"],
        "symbol-description": "error",
        "vars-on-top": "error",
        "yoda": "error"
    }
};
