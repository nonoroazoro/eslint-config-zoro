# Zoro's ESLint Configuration [![Dependency Status](https://david-dm.org/nonoroazoro/eslint-config-zoro.svg?style=flat-square)](https://david-dm.org/nonoroazoro/eslint-config-zoro) [![Build Status](https://travis-ci.org/nonoroazoro/eslint-config-zoro.svg?branch=master)](https://travis-ci.org/nonoroazoro/eslint-config-zoro)

Based on the default ESLint rules:

1. [Best Practices](http://eslint.org/docs/rules/#best-practices)
1. [Errors](http://eslint.org/docs/rules/#possible-errors)
1. [Node](http://eslint.org/docs/rules/#nodejs-and-commonjs)
1. [Style](http://eslint.org/docs/rules/#stylistic-issues)
1. [Variables](http://eslint.org/docs/rules/#variables)
1. [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)
1. [React](https://github.com/yannickcr/eslint-plugin-react)

added some **VERY STRICT RULES**.


## Usage

There're two ESLint configurations for your usage.


### eslint-config-zoro

This is the default configuration contains all of the rules, **including `React`**.

It requires `eslint`, `babel-eslint`, `eslint-plugin-react`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint babel-eslint eslint-plugin-react
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro"
    }
    ```


### eslint-config-zoro/base

This configuration contains all of the rules **but `React`** (in case you don't use React).

It requires `eslint`, `babel-eslint`.

1. Install:

    ```bash
    npm i -D eslint-config-zoro eslint babel-eslint
    ```

1. In your `.eslintrc` file, add:

    ```json
    {
        "extends": "eslint-config-zoro/base"
    }
    ```


## Where to ask for help?

- [ESLint Rules](http://eslint.org/docs/rules/)
- [ESLint Rules - React](https://github.com/yannickcr/eslint-plugin-react)
