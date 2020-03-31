<h1 align="center">Zoro's ESLint Configuration</h1>
<p align="center">A fully customized <b>ESLint configuration</b> based on the default <i>ESLint</i>, <i>React</i> and <i>TypeScript</i> rules</p>
<p align="center">
    <a href="https://github.com/nonoroazoro/eslint-config-zoro/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/eslint-config-zoro.svg" alt="GitHub License" />
    </a>
    <a href="https://travis-ci.org/nonoroazoro/eslint-config-zoro">
        <img src="https://img.shields.io/travis/nonoroazoro/eslint-config-zoro/master.svg" alt="Build Status" />
    </a>
    <a href="https://www.npmjs.com/package/eslint-config-zoro">
        <img src="https://img.shields.io/npm/dw/eslint-config-zoro.svg" alt="NPM Downloads" />
    </a>
</p>


## Based on

- ESLint rules:
    1. [Best Practices](http://eslint.org/docs/rules/#best-practices)
    1. [Errors](http://eslint.org/docs/rules/#possible-errors)
    1. [Node](http://eslint.org/docs/rules/#nodejs-and-commonjs)
    1. [Style](http://eslint.org/docs/rules/#stylistic-issues)
    1. [Variables](http://eslint.org/docs/rules/#variables)
    1. [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)

- React rules:
    1. [React](https://github.com/yannickcr/eslint-plugin-react)
    1. [React Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

- TypeScript rules:
    1. [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules)


## Usage

This package contains four configurations for your usage:

1. **[default](#1-eslint-config-zoro)**: Consists of `all` the rules.
1. **[eslint](#2-eslint-config-zoroeslint)**: Consists of the `ESLint` rules.
1. **[react](#3-eslint-config-zororeact)**: Consists of the `React` rules.
1. **[typescript](#4-eslint-config-zorotypescript)**: Consists of the `TypeScript` rules.

The simplest usage is to extend the default configuration in your `.eslintrc.json` as the followings:

```json
{
    "extends": "eslint-config-zoro"
}
```

You can also extend with any combination of the last three rules, such as:

```json
{
    "extends": [
        "eslint-config-zoro/eslint",
        "eslint-config-zoro/typescript"
    ]
}
```

### 1. eslint-config-zoro

This is the default configuration which contains `all` the rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
    ```

1. Add to your `.eslintrc.json` file:

    ```json
    {
        "extends": "eslint-config-zoro"
    }
    ```


### 2. eslint-config-zoro/eslint

This configuration only contains the `ESLint` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint
    ```

1. Add to your `.eslintrc.json` file:

    ```json
    {
        "extends": "eslint-config-zoro/eslint"
    }
    ```

### 3. eslint-config-zoro/react

This configuration only contains the `React` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint eslint-plugin-react eslint-plugin-react-hooks
    ```

1. Add to your `.eslintrc.json` file:

    ```json
    {
        "extends": "eslint-config-zoro/react"
    }
    ```

### 4. eslint-config-zoro/typescript

This configuration only contains the `TypeScript` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

1. In your `.eslintrc.json` file, add:

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
