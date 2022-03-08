/**
 * Includes `Node` rules.
 */
export = {
    "extends": require.resolve("./rules/node"),
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
