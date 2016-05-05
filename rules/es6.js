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
        "arrow-body-style": 0,
        "arrow-parens": 0,
        "arrow-spacing": [2, { "before": true, "after": true }],
        "constructor-super": 2,
        "generator-star-spacing": 0,
        "no-class-assign": 2,
        "no-confusing-arrow": [2, {
            "allowParens": true,
        }],
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-restricted-imports": 0,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-var": 2,
        "object-shorthand": 0,
        "prefer-const": 2,
        "prefer-reflect": 0,
        "prefer-rest-params": 2,
        "prefer-spread": 0,
        "prefer-template": 2,
        "require-yield": 0,
        "sort-imports": 0,
        "template-curly-spacing": 2,
        "yield-star-spacing": [2, "after"],
    }
};
