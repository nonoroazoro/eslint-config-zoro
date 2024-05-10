"use strict";
module.exports = {
    "extends": [
        "./rules/react",
        "./rules/react-hooks"
    ].map((path) => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    }
};
