module.exports = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/style",
        "./rules/variables",
        "./rules/es6",
        "./rules/react"
    ].map(require.resolve),
    "env": {
        "browser": true,
        "mocha": false,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    "globals": {},
    "rules": {}
};
