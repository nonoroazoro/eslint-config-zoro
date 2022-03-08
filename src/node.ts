/**
 * Includes `Node` rules.
 */
export = {
    "extends": [
        "./rules/node"
    ].map(path => require.resolve(path)),
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
