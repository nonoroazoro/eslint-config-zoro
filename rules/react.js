module.exports = {
    "plugins": ["react"],
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "sourceType": "module"
    },
    "rules": {
        "jsx-quotes": [2, "prefer-double"],
        "react/display-name": 0,
        "react/forbid-component-props": 0,
        "react/forbid-prop-types": 0,
        "react/no-danger": 0,
        "react/no-danger-with-children": 2,
        "react/no-deprecated": 2,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/no-find-dom-node": 2,
        "react/no-is-mounted": 2,

        // suspended。
        "react/no-multi-comp": [0, { ignoreStateless: true }],

        "react/no-render-return-value": 2,

        // suspended。
        "react/no-set-state": 0,

        "react/no-string-refs": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": [2, "always"],
        "react/prefer-stateless-function": 2,
        "react/prop-types": [2, { "ignore": ["children"], "customValidators": [] }],
        "react/react-in-jsx-scope": 2,
        "react/require-optimization": 0,
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": [2, {
            "order": [
                "static-methods",
                "lifecycle",
                "/^on.+$/",
                "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                "everything-else",
                "/^render.+$/",
                "render"
            ],
        }],
        "react/sort-prop-types": 0,
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [2, "line-aligned"],
        "react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-filename-extension": [2, { extensions: [".jsx"] }],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-handler-names": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-key": 0,
        "react/jsx-max-props-per-line": 0,
        "react/jsx-no-bind": [2, {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false,
        }],
        "react/jsx-no-comment-textnodes": 2,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-literals": 0,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": 0,
        "react/jsx-space-before-closing": [2, "always"],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/jsx-wrap-multilines": [2, {
            declaration: true,
            assignment: true,
            return: true
        }],
    }
};
