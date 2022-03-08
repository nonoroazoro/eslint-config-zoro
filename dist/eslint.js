"use strict";
module.exports = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/style",
        "./rules/variables",
        "./rules/es6"
    ].map((path) => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
