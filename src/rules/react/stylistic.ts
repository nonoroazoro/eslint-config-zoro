import plugin from "@stylistic/eslint-plugin";

import type { Config } from "../../types/Config";

/**
 * See https://eslint.style/rules
 */
export const STYLISTIC: Config = {
    plugins: {
        "@stylistic": plugin
    },
    rules: {
        "@stylistic/jsx-child-element-spacing": "off",
        "@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
        "@stylistic/jsx-closing-tag-location": "error",
        "@stylistic/jsx-curly-brace-presence": [
            "error",
            {
                "children": "never",
                "propElementValues": "always",
                "props": "never"
            }
        ],
        "@stylistic/jsx-curly-newline": ["error", "consistent"],
        "@stylistic/jsx-curly-spacing": ["error", "never", { "allowMultiline": true }],
        "@stylistic/jsx-equals-spacing": ["error", "never"],
        "@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
        "@stylistic/jsx-function-call-newline": ["error", "multiline"],
        "@stylistic/jsx-indent-props": ["error", 4],
        "@stylistic/jsx-max-props-per-line": "off",
        "@stylistic/jsx-newline": "off",
        "@stylistic/jsx-one-expression-per-line": "off",
        "@stylistic/jsx-pascal-case": "error",
        "@stylistic/jsx-props-no-multi-spaces": "error",
        "@stylistic/jsx-quotes": ["error", "prefer-double"],
        "@stylistic/jsx-self-closing-comp": "error",
        "@stylistic/jsx-sort-props": "off",
        "@stylistic/jsx-tag-spacing": [
            "error",
            {
                "afterOpening": "never",
                "beforeClosing": "never",
                "beforeSelfClosing": "always",
                "closingSlash": "never"
            }
        ],
        "@stylistic/jsx-wrap-multilines": [
            "error",
            {
                "declaration": "parens-new-line",
                "assignment": "parens-new-line",
                "return": "parens-new-line",
                "arrow": "parens-new-line",
                "condition": "parens-new-line",
                "logical": "parens-new-line",
                "prop": "parens-new-line",
                "propertyValue": "parens-new-line"
            }
        ]
    }
};
