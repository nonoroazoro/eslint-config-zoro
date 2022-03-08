"use strict";
module.exports = {
    "extends": [
        "./rules/node"
    ].map(path => require.resolve(path)),
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
