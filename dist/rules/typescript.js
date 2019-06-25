"use strict";
module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", "array-simple"],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": "Use {} instead",
                    "String": {
                        "message": "Use string instead",
                        "fixWith": "string"
                    }
                }
            }
        ],
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "overrides": {
                    "constructors": "no-public"
                }
            }
        ],
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "@typescript-eslint/generic-type-naming": "off",
        // Temporary disable the following rule as it breaks on enum's indent.
        // "@typescript-eslint/indent": "off",
        // "@typescript-eslint/indent": ["error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/member-naming": ["error", { "private": "^_" }],
        "@typescript-eslint/member-ordering": [
            "error",
            {
                "default": [
                    "public-static-field",
                    "public-instance-field",
                    "protected-static-field",
                    "protected-instance-field",
                    "private-static-field",
                    "private-instance-field",
                    "public-constructor",
                    "protected-constructor",
                    "private-constructor",
                    "public-static-method",
                    "public-instance-method",
                    "protected-static-method",
                    "protected-instance-method",
                    "private-static-method",
                    "private-instance-method"
                ]
            }
        ],
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": [
                    "arrowFunctions",
                    "functions",
                    "methods"
                ]
            }
        ],
        "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": true }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-parens": ["error", "functions"],
        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true, "allowDefinitionFiles": true }],
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-this-alias": ["error", { "allowedNames": ["self"] }],
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-type-alias": "off",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": true
            }
        ],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        "@typescript-eslint/promise-function-async": ["error", { "allowedPromiseNames": ["Thenable"] }],
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": ["error", { "ignoreStatic": true }],
        "@typescript-eslint/unified-signatures": "off"
    },
    "overrides": [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                // Checked by @typescript-eslint/camelcase
                "camelcase": "off",
                // Checked by @typescript-eslint/func-call-spacing
                "func-call-spacing": "off",
                // Checked by @typescript-eslint/indent
                // "indent": "off",
                // Checked by @typescript-eslint/no-empty-function
                "no-empty-function": "off",
                // Checked by @typescript-eslint/no-extra-parens
                "no-extra-parens": "off",
                // Checked by @typescript-eslint/no-unused-vars
                "no-unused-vars": "off",
                // Checked by @typescript-eslint/no-useless-constructor
                "no-useless-constructor": "off",
                // Checked by @typescript-eslint/semi
                "semi": "off",
                // Checked by Typescript - ts(2378)
                "getter-return": "off",
                // Checked by Typescript - ts(2300)
                "no-dupe-args": "off",
                // Checked by Typescript - ts(1117)
                "no-dupe-keys": "off",
                // Checked by Typescript - ts(7027)
                "no-unreachable": "off",
                // Checked by Typescript - ts(2367)
                "valid-typeof": "off",
                // Checked by Typescript - ts(2588)
                "no-const-assign": "off",
                // Checked by Typescript - ts(2588)
                "no-new-symbol": "off",
                // Checked by Typescript - ts(2376)
                "no-this-before-super": "off",
                // Checked by Typescript - `strictNullChecks`.
                "no-undef": "off"
            }
        }
    ]
};
