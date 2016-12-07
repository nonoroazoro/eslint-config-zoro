/**
 * Modified ESLint Possible Errors.
 * http://eslint.org/docs/rules/#nodejs-and-commonjs
 */
module.exports = {
    "env": {
        "node": true
    },
    rules: {
        "callback-return": "off",
        "global-require": "error",
        "handle-callback-err": "off",
        "no-mixed-requires": "off",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-restricted-modules": "off",
        "no-sync": "off"
    }
};
