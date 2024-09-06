import stylistic from '@stylistic/eslint-plugin'

/**
 * Includes `Stylistic` rules.
 */
export default {
    "extends": [
        "./rules/stylistic/base",
        "./rules/stylistic/jsx"
    ].map(path => require.resolve(path)),
    "plugins": {
        '@stylistic': stylistic
    }
}
