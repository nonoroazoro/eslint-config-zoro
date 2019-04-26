/**
 * https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
export = {
    "plugins": [
        "react-hooks"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error"
    }
};
