/**
 * Includes `all` rules.
 */
export default {
    "extends": [
        "./eslint",
        "./node",
        "./react",
        "./stylistic",
        "./typescript"
    ].map(path => require.resolve(path))
};
