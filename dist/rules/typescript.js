"use strict";
module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", "array-simple"],
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
        "/camelcase": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-interface": ["error", { "allowSingleExtends": true }],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": ["error", { "allowDeclarations": true, "allowDefinitionFiles": true }],
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-object-literal-type-assertion": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/type-annotation-spacing": "error"
    }
};
