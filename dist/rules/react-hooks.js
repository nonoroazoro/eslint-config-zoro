"use strict";
module.exports = {
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
