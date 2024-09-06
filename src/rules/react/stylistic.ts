import stylistic from '@stylistic/eslint-plugin'

/**
 * See https://eslint.style/rules
 */
export default {
    "plugins": {
        '@stylistic': stylistic
    },
    "rules": {
        "jsx-child-element-spacing": "off",
        "jsx-closing-bracket-location": ["error", "line-aligned"],
        "jsx-closing-tag-location": "error",
        "jsx-curly-brace-presence": [
            "error",
            {
                "children": "never",
                "propElementValues": "always",
                "props": "never"
            }
        ],
        "jsx-curly-newline": ["error", "consistent"],
        "jsx-curly-spacing": ["error", "never", { "allowMultiline": true }],
        "jsx-equals-spacing": ["error", "never"],
        "jsx-first-prop-new-line": ["error", "multiline"],
        "jsx-function-call-newline": ["error", "multiline"],
        "jsx-indent": ["error", 4],
        "jsx-indent-props": ["error", 4],
        "jsx-max-props-per-line": "off",
        "jsx-newline": "off",
        "jsx-one-expression-per-line": "off",
        "jsx-pascal-case": "error",
        "jsx-props-no-multi-spaces": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "jsx-self-closing-comp": "error",
        "jsx-sort-props": "off",
        "jsx-tag-spacing": [
            "error",
            {
                "afterOpening": "never",
                "beforeClosing": "never",
                "beforeSelfClosing": "always",
                "closingSlash": "never"
            }
        ],
        "jsx-wrap-multilines": [
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
}
