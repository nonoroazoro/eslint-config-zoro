/**
 * Includes `TypeScript` rules.
 */
export default {
    "extends": require.resolve("./rules/typescript"),
    "env": {
        "browser": true
    },
    "parser": "@typescript-eslint/parser"
};
