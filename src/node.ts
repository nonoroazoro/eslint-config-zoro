/**
 * Includes `Node` rules.
 */
export = {
    "extends": require.resolve("./rules/node"),
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    }
};
