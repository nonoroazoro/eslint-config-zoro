/**
 * Include all rules but react.
 */
module.exports = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/node",
        "./rules/style",
        "./rules/variables",
        "./rules/es6"
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
