"use strict";
module.exports = {
    "rules": {
        "init-declarations": "off",
        "no-delete-var": "error",
        "no-label-var": "off",
        "no-restricted-globals": "off",
        "no-shadow": "error",
        "no-shadow-restricted-names": "error",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }]
    }
};
