"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * See https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules
 */
exports.default = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/ban-tslint-comment": "warn",
        "@typescript-eslint/block-spacing": ["error", "always"],
        "@typescript-eslint/brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@typescript-eslint/class-literal-property-style": "off",
        "@typescript-eslint/class-methods-use-this": "off",
        "@typescript-eslint/comma-dangle": "error",
        "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
        "@typescript-eslint/consistent-generic-constructors": "off",
        "@typescript-eslint/consistent-indexed-object-style": "error",
        "@typescript-eslint/consistent-return": "off",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/consistent-type-exports": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        // Disable the following rule as it's in a broken state now.
        // https://github.com/typescript-eslint/typescript-eslint/issues/1824
        // https://github.com/typescript-eslint/typescript-eslint/issues/1701
        // "@typescript-eslint/indent": ["error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "@typescript-eslint/keyword-spacing": [
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
        "@typescript-eslint/lines-around-comment": "off",
        "@typescript-eslint/lines-between-class-members": [
            "error",
            "always",
            { "exceptAfterSingleLine": true }
        ],
        "@typescript-eslint/member-delimiter-style": "error",
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
                "format": ["camelCase", "UPPER_CASE"],
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
        "@typescript-eslint/no-dynamic-delete": "off",
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
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-extra-parens": ["error", "functions"],
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "@typescript-eslint/no-inferrable-types": "off",
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
        "@typescript-eslint/no-restricted-types": [
            "error",
            {
                "types": { "Function": false }
            }
        ],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-this-alias": ["error", { "allowedNames": ["self"] }],
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-template-expression": "error",
        "@typescript-eslint/no-unnecessary-type-arguments": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unnecessary-type-parameters": "error",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-declaration-merging": "error",
        "@typescript-eslint/no-unsafe-enum-comparison": "off",
        "@typescript-eslint/no-unsafe-function-type": "error",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
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
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-wrapper-object-types": "error",
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "@typescript-eslint/only-throw-error": "error",
        "@typescript-eslint/padding-line-between-statements": "off",
        "@typescript-eslint/prefer-as-const": "off",
        "@typescript-eslint/prefer-enum-initializers": "off",
        "@typescript-eslint/prefer-find": "error",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-literal-enum-member": ["error", { "allowBitwiseExpressions": true }],
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "off",
        "@typescript-eslint/prefer-promise-reject-errors": "error",
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        "@typescript-eslint/prefer-regexp-exec": "off",
        "@typescript-eslint/prefer-return-this-type": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/return-await": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/space-before-blocks": "error",
        "@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
        "@typescript-eslint/space-infix-ops": "error",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "off",
        "@typescript-eslint/use-unknown-in-catch-callback-variable": "off"
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "rules": {
                // Checked by @typescript-eslint
                "block-spacing": "off",
                // Checked by @typescript-eslint
                "brace-style": "off",
                // Checked by @typescript-eslint
                "comma-dangle": "off",
                // Checked by @typescript-eslint
                "comma-spacing": "off",
                // Checked by @typescript-eslint
                "consistent-return": "off",
                // Checked by @typescript-eslint
                "default-param-last": "off",
                // Checked by @typescript-eslint
                "func-call-spacing": "off",
                // Checked by @typescript-eslint
                // "indent": "off",
                // Checked by @typescript-eslint
                "key-spacing": "off",
                // Checked by @typescript-eslint
                "keyword-spacing": "off",
                // Checked by @typescript-eslint
                "lines-around-comment": "off",
                // Checked by @typescript-eslint
                "lines-between-class-members": "off",
                // Checked by @typescript-eslint
                "no-duplicate-imports": "off",
                // Checked by @typescript-eslint
                "no-empty-function": "off",
                // Checked by @typescript-eslint
                "no-extra-parens": "off",
                // Checked by @typescript-eslint
                "no-extra-semi": "off",
                // Checked by @typescript-eslint
                "no-loop-func": "off",
                // Checked by @typescript-eslint
                "no-shadow": "off",
                // Checked by @typescript-eslint/only-throw-error
                "no-throw-literal": "off",
                // Checked by @typescript-eslint
                "no-unused-expressions": "off",
                // Checked by @typescript-eslint
                "no-unused-vars": "off",
                // Checked by @typescript-eslint
                "no-use-before-define": "off",
                // Checked by @typescript-eslint
                "no-useless-constructor": "off",
                // Checked by @typescript-eslint
                "object-curly-spacing": "off",
                // Checked by @typescript-eslint
                "prefer-promise-reject-errors": "off",
                // Checked by @typescript-eslint
                "quotes": "off",
                // Checked by @typescript-eslint
                "semi": "off",
                // Checked by @typescript-eslint
                "space-before-blocks": "off",
                // Checked by @typescript-eslint
                "space-before-function-paren": "off",
                // Checked by @typescript-eslint
                "space-infix-ops": "off",
                // Checked by Typescript - ts(2335) & ts(2377)
                "constructor-super": "off",
                // Checked by Typescript - ts(2378)
                "getter-return": "off",
                // Checked by Typescript - ts(2588)
                "no-const-assign": "off",
                // Checked by Typescript - ts(2300)
                "no-dupe-args": "off",
                // Checked by @typescript-eslint & ts(2393) & ts(2300)
                "no-dupe-class-members": "off",
                // Checked by Typescript - ts(1117)
                "no-dupe-keys": "off",
                // Checked by Typescript - ts(2539)
                "no-func-assign": "off",
                // Checked by Typescript - ts(2588)
                "no-new-symbol": "off",
                // Checked by Typescript - ts(2349)
                "no-obj-calls": "off",
                // Checked by Typescript - ts(2451)
                "no-redeclare": "off",
                // Checked by Typescript - ts(2376)
                "no-this-before-super": "off",
                // Checked by Typescript - `strictNullChecks` ts(2304)
                "no-undef": "off",
                // Checked by Typescript - ts(7027)
                "no-unreachable": "off",
                // Checked by Typescript - ts(2365) & ts(2360) & ts(2358)
                "no-unsafe-negation": "off",
                // Checked by Typescript - ts(2367)
                "valid-typeof": "off"
            }
        },
        {
            "files": ["*.js", "*.jsx"],
            "rules": {
                // Disabled in vanilla JavaScript files
                "@typescript-eslint/no-shadow": "off",
                "@typescript-eslint/prefer-nullish-coalescing": "off",
                "@typescript-eslint/restrict-template-expressions": "off"
            }
        }
    ]
};
