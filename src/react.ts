/**
 * Includes `React` rules.
 */
export default {
    "extends": [
        "./rules/react/react",
        "./rules/react/react-hooks"
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
