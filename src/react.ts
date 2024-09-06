/**
 * Includes `React` rules.
 */
export default {
    "extends": [
        "./rules/react/react-hooks",
        "./rules/react/react",
        "./rules/react/stylistic"
    ].map(path => require.resolve(path)),
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    }
};
