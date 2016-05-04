module.exports = {
    "env": {
        "browser": true,
    },
    "extends": ["eslint:recommended"],
    "parser": "babel-eslint",
    "rules": {
        "brace-style": [2, "allman"],
        "indent": [2, 4],
        "no-console": 1,
        "no-unused-vars": [2, { "args": "none" }],
        "quotes": [2, "double"],
        "semi": [2, "always"]
    }
};
