﻿module.exports = {
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
        "no-unused-vars": ["error", { "vars": "local", "args": "none" }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }]
    }
};
