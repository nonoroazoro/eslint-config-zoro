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
    1. [ESLint](https://eslint.org/docs/rules)

- React rules:
    1. [React](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)
    1. [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

- TypeScript rules:
    1. [TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)

- Node rules:
    1. [Node](https://github.com/mysticatea/eslint-plugin-node/tree/master/docs/rules)

- Stylistic rules:
    1. [Stylistic](https://eslint.style/rules)

## Usage

This package contains `six` configurations for your usage:

1. **[default](#1-eslint-config-zoro)**: Consists of `all` the rules.
1. **[eslint](#2-eslint-config-zoroeslint)**: Consists of the `ESLint` rules.
1. **[react](#3-eslint-config-zororeact)**: Consists of the `React` rules.
1. **[typescript](#4-eslint-config-zorotypescript)**: Consists of the `TypeScript` rules.
1. **[node](#5-eslint-config-zoronode)**: Consists of the `Node` rules.
1. **[stylistic](#6-eslint-config-zorostylistic)**: Consists of the `Stylistic` rules.

The simplest usage is to extend the default configuration in your `.eslintrc.json` as the followings:

```json
{
    "extends": "eslint-config-zoro"
}
```

You can also extend with any combination of `the last five rules`, such as:

```json
{
    "extends": [
        "eslint-config-zoro/eslint",
        "eslint-config-zoro/react",
        "eslint-config-zoro/stylistic",
        "eslint-config-zoro/typescript"
    ]
}
```

### 1. eslint-config-zoro

This is the default configuration which contains `all` the rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-node
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

### 5. eslint-config-zoro/node

This configuration only contains the `Node` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint eslint-plugin-node
    ```

1. In your `.eslintrc.json` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/node"
    }
    ```

### 6. eslint-config-zoro/stylistic

This configuration only contains the `Stylistic` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @stylistic/eslint-plugin
    ```

1. In your `.eslintrc.json` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/stylistic"
    }
    ```

## Where to ask for help?

- [ESLint Rules](http://eslint.org/docs/rules)
- [ESLint Rules - React](https://github.com/yannickcr/eslint-plugin-react)
- [ESLint Rules - React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [ESLint Rules - TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [ESLint Rules - Node](https://github.com/mysticatea/eslint-plugin-node)
- [ESLint Rules - Stylistic](https://eslint.style/rules)
