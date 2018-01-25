/**
 * Modified ESLint Possible Errors.
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/boolean-prop-naming": "error",
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/destructuring-assignment": "off",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-prop-types": ["error", { "forbid": ["any", "array", "object"] }],
        "react/forbid-foreign-prop-types": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-array-index-key": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "off",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": ["error", { "ignoreStateless": true }],
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-typos": "error",
        "react/no-string-refs": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unused-prop-types": ["warn", { "customValidators": [], "skipShapeProps": true }],
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-stateless-function": ["error", { "ignorePureComponents": true }],
        "react/prop-types": ["error", { "ignore": ["children"], "customValidators": [] }],
        "react/react-in-jsx-scope": "error",
        "react/require-default-props": "error",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": ["error", {
            "order": [
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ]
        }],
        "react/sort-prop-types": "off",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",

        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-closing-bracket-location": ["error", "line-aligned"],
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": ["error", "never", { "allowMultiline": true }],
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-handler-names": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-key": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-no-bind": ["error", {
            "ignoreRefs": true,
            "allowArrowFunctions": true,
            "allowBind": false
        }],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "off",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-default-props": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never"
        }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-wrap-multilines": ["error", {
            "arrow": true,
            "assignment": true,
            "declaration": true,
            "return": true
        }]
    }
};
