/**
 * Includes `ESLint` rules.
 */
export = {
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
        "ecmaVersion": "latest",
        "sourceType": "module"
    }
};
