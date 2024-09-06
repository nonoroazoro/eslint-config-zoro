/**
 * Includes `all` rules.
 */
export default {
    "extends": [
        "./eslint",
        "./node",
        "./react",
        "./typescript"
    ].map(path => require.resolve(path))
};
