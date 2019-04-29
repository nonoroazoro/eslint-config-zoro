# Zoro's ESLint Configuration [![Dependency Status](https://img.shields.io/npm/dw/eslint-config-zoro.svg?label=Downloads&style=flat-square)](https://www.npmjs.com/package/eslint-config-zoro) [![Dependency Status](https://david-dm.org/nonoroazoro/eslint-config-zoro.svg?style=flat-square)](https://david-dm.org/nonoroazoro/eslint-config-zoro) [![Build Status](https://travis-ci.org/nonoroazoro/eslint-config-zoro.svg?branch=master)](https://travis-ci.org/nonoroazoro/eslint-config-zoro)

A customized `ESLint configuration` based on the default `ESLint`, `React` and `TypeScript` rules:

1. ESLint rules:
    1. [Best Practices](http://eslint.org/docs/rules/#best-practices)
    1. [Errors](http://eslint.org/docs/rules/#possible-errors)
    1. [Node](http://eslint.org/docs/rules/#nodejs-and-commonjs)
    1. [Style](http://eslint.org/docs/rules/#stylistic-issues)
    1. [Variables](http://eslint.org/docs/rules/#variables)
    1. [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)

1. React rules:
    1. [React](https://github.com/yannickcr/eslint-plugin-react)
    1. [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

1. TypeScript rules:
    1. [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)


## Usage

This package contains four configurations for your usage:

1. The `default` configuration contains `all` rules.
1. The `eslint` configuration contains the `ESLint` rules.
1. The `react` configuration contains the `React` rules.
1. The `typescript` configuration contains the `TypeScript` rules.

You can just extend the `default` rules as the followings:

```json
{
    "extends": "eslint-config-zoro"
}
```

You can also extend with any combination of the last three rules, such as:

```json
{
    "extends": ["eslint-config-zoro/eslint", "eslint-config-zoro/react"]
}
```

### 1. eslint-config-zoro

This is the default configuration contains `all` rules.

It requires `eslint`, `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react` and `eslint-plugin-react-hooks`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro"
    }
    ```


### 2. eslint-config-zoro/eslint

This configuration contains the `ESLint` rules.

It requires `eslint`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/eslint"
    }
    ```

### 3. eslint-config-zoro/react

This configuration contains the `React` rules.

It requires `eslint`, `eslint-plugin-react` and `eslint-plugin-react-hooks`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint eslint-plugin-react eslint-plugin-react-hooks
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/react"
    }
    ```

### 4. eslint-config-zoro/typescript

This configuration contains the `TypeScript` rules.

It requires `eslint`, `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/typescript"
    }
    ```


## Where to ask for help?

- [ESLint Rules](http://eslint.org/docs/rules/)
- [ESLint Rules - React](https://github.com/yannickcr/eslint-plugin-react)
- [ESLint Rules - React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [ESLint Rules - TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)
