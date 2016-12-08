/**
 * Include all rules.
 */
module.exports = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/node",
        "./rules/style",
        "./rules/variables",
        "./rules/es6",
        "./rules/react"
    ].map(require.resolve),
    "env": {
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {}
};
