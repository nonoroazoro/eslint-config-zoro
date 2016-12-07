/**
 * Modified ESLint Possible Errors.
 * http://eslint.org/docs/rules/#possible-errors
 */
module.exports = {
    "rules": {
        "comma-dangle": "error",
        "no-cond-assign": ["error", "always"],
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error", { "allowEmptyCatch": true }],
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "off",
        "no-extra-parens": ["error", "functions"],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-negated-in-lhs": "error",
        "no-obj-calls": "error",
        "no-regex-spaces": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "off",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "use-isnan": "error",
        "valid-jsdoc": "off",
        "valid-typeof": ["error", { requireStringLiterals: true }]
    }
};
