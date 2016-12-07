module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "generators": false,
            "objectLiteralDuplicateProperties": false
        }
    },
    "rules": {
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "constructor-super": "error",
        "generator-star-spacing": "off",
        "no-class-assign": "error",
        "no-confusing-arrow": ["error", {
            "allowParens": true
        }],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": "error",
        "no-new-symbol": "error",
        "no-restricted-imports": "off",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "object-shorthand": "off",
        "prefer-const": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-spread": "off",
        "prefer-template": "error",
        "require-yield": "off",
        "sort-imports": "off",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": ["error", "after"]
    }
};
