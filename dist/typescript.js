"use strict";
module.exports = {
    "extends": require.resolve("./rules/typescript"),
    "env": {
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
