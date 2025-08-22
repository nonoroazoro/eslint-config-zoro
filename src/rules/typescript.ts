import * as parser from "@typescript-eslint/parser";
import plugin from "@typescript-eslint/eslint-plugin";

import type { Config, Plugin } from "../types/Config";

/**
 * See https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
 */
export const TYPESCRIPT: Config = {
    languageOptions: {
        parser
    },
    plugins: {
        "@typescript-eslint": plugin as unknown as Plugin
    },
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-tslint-comment": "warn",
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/class-methods-use-this": "off",
        "@typescript-eslint/consistent-generic-constructors": "error",
        "@typescript-eslint/consistent-indexed-object-style": "error",

        // Use tsconfig's noImplicitReturns option instead.
        "@typescript-eslint/consistent-return": "off",

        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-exports": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    // Index signature
                    "signature",
                    "call-signature",

                    // Fields
                    "protected-static-field",
                    "protected-instance-field",
                    "protected-decorated-field",
                    "protected-abstract-field",
                    "public-static-field",
                    "public-instance-field",
                    "public-decorated-field",
                    "public-abstract-field",
                    "private-static-field",
                    "private-instance-field",
                    "private-decorated-field",

                    // Constructors
                    "protected-constructor",
                    "public-constructor",
                    "private-constructor",

                    // Methods
                    "protected-static-method",
                    "protected-instance-method",
                    "public-static-method",
                    "public-instance-method",
                    "private-static-method",
                    "private-instance-method"
                ]
            }
        ],
        "@typescript-eslint/method-signature-style": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": ["camelCase", "PascalCase", "UPPER_CASE"],
                "leadingUnderscore": "allow",
                "trailingUnderscore": "forbid"
            }
        ],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-array-delete": "error",
        "@typescript-eslint/no-base-to-string": "error",
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        "@typescript-eslint/no-confusing-void-expression": "error",
        "@typescript-eslint/no-deprecated": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-duplicate-enum-values": "error",
        "@typescript-eslint/no-duplicate-type-constituents": "error",
        "@typescript-eslint/no-dynamic-delete": "error",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods",
                    "overrideMethods"
                ]
            }
        ],
        "@typescript-eslint/no-empty-object-type": ["error", { "allowInterfaces": "with-single-extends" }],
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-invalid-this": "off",
        "@typescript-eslint/no-invalid-void-type": "error",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-meaningless-void-operator": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": ["error", { "checksVoidReturn": false }],
        "@typescript-eslint/no-mixed-enums": "error",
        "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true, "allowDefinitionFiles": true }],
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-redeclare": ["error", { "ignoreDeclarationMerge": true }],
        "@typescript-eslint/no-redundant-type-constituents": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-restricted-imports": "off",
        "@typescript-eslint/no-restricted-types": "error",
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-this-alias": ["error", { "allowedNames": ["self"] }],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-template-expression": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unnecessary-type-parameters": "error",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/no-unsafe-function-type": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-unsafe-type-assertion": "off",
        "@typescript-eslint/no-unsafe-unary-minus": "error",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": false,
                "allowTernary": false,
                "allowTaggedTemplates": false
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false }],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/no-wrapper-object-types": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/only-throw-error": "error",
        "@typescript-eslint/prefer-as-const": "off",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-find": "error",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": ["error", { "allowBitwiseExpressions": true }],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-promise-reject-errors": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "off",
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "off"
    }
};
