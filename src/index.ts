/**
 * Include all rules.
 */
export = {
    "extends": [
        "./rules/best-practices",
        "./rules/errors",
        "./rules/node",
        "./rules/style",
        "./rules/variables",
        "./rules/es6",
        "./rules/typescript",
        "./rules/react",
        "./rules/react-hooks"
    ].map((path) => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    }
};
