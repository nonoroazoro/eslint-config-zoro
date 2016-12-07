# Zoro's ESLint Configuration [![Dependency Status](https://david-dm.org/nonoroazoro/eslint-config-zoro.svg?style=flat-square)](https://david-dm.org/nonoroazoro/eslint-config-zoro) [![Build Status](https://travis-ci.org/nonoroazoro/eslint-config-zoro.svg?branch=master)](https://travis-ci.org/nonoroazoro/eslint-config-zoro)

Based on the default ESLint configuration:

1. [Errors](http://eslint.org/docs/rules/#possible-errors)
1. [Best Practices](http://eslint.org/docs/rules/#best-practices)
1. [Variables](http://eslint.org/docs/rules/#variables)
1. [Style](http://eslint.org/docs/rules/#stylistic-issues)
1. [ECMAScript 6](http://eslint.org/docs/rules/#ecmascript-6)
1. [React](https://github.com/yannickcr/eslint-plugin-react)

added some **VERY STRICT RULES**.


## Installation

1. Install ESLint:

    ```bash
    npm i -D eslint
    ```

1. Install this configuration:

    ```bash
    npm i -D eslint-config-zoro
    ```


## Usage

In your `.eslintrc` file, add:

```json
{
    "extends": "eslint-config-zoro"
}
```

And you can overwrite this configuration by:

```json
{
    "extends": "eslint-config-zoro",
    "rules": {
        "no-empty": 0
    }
}
```


## Where to ask for help?

- [ESLint Rules](http://eslint.org/docs/rules/)
- [ESLint React Rules](https://github.com/yannickcr/eslint-plugin-react)
