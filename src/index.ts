/**
 * Includes `all` rules.
 */
export = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/node",
        "./rules/style",
        "./rules/variables",
        "./rules/es6",
        "./rules/react",
        "./rules/react-hooks",
        "./rules/typescript"
    ].map((path) => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    }
};
