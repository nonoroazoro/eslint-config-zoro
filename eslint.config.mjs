export default {
    extends: [
        "./dist/eslint.js",
        "./dist/stylistic.js",
        "./dist/typescript.js"
    ],
    env: {
        "jest": true
    },
    parserOptions: {
        "project": "./tsconfig.json"
    },
    ignores: [
        "dist",
        "eslint.js",
        "index.js",
        "jest.config.js",
        "react.js",
        "stylistic.js",
        "typescript.js",
    ]
};
