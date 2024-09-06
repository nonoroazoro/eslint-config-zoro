/**
 * Includes `ESLint` rules.
 */
export default {
    "extends": [
        "./rules/eslint/layout-formatting",
        "./rules/eslint/possible-problems",
        "./rules/eslint/suggestions"
    ].map(path => require.resolve(path)),
    "env": {
        "browser": true
    }
};
