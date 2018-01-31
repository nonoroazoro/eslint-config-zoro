/**
 * Modified ESLint Possible Errors.
 * http://eslint.org/docs/rules/#variables
 */
module.exports = {
    "rules": {
        "init-declarations": "off",
        "no-catch-shadow": "off",
        "no-delete-var": "error",
        "no-label-var": "off",
        "no-restricted-globals": "off",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }]
    }
};
