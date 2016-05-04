module.exports = {
    "extends": ["plugin:react/recommended"],
    "plugins": ["react"],
    "parserOptions": {
        "ecmaFeatures": { "jsx": true },
        "sourceType": "module"
    },
    "rules": {
        "jsx-quotes": [2, "prefer-double"],
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [2, "line-aligned"],
        "react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-pascal-case": 2,
        "react/no-danger": 0,
        "react/prefer-es6-class": 2,
        "react/prop-types": [2, { "ignore": ["children"], "customValidators": [] }],
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/jsx-space-before-closing": 2,
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
        "react/wrap-multilines": [2, {
            "declaration": true,
            "assignment": true,
            "return": true
        }],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-indent": [2, 4],

        // 暂时取消。
        "react/no-multi-comp": 0,
        "react/no-set-state": 0
    }
};
