module.exports = {
    extends: [
        "./rules/base",
        "./rules/react",
    ].map(require.resolve),
    ecmaFeatures: {},
    globals: {},
    rules: {}
};
