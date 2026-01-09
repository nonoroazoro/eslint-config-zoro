<h1 align="center">Zoro's ESLint Configuration</h1>
<p align="center">A fully customized <b>ESLint configuration</b> based on <i>ESLint</i>, <i>Stylistic</i>, <i>TypeScript</i>, <i>React</i> and <i>Node</i> rules.</p>
<p align="center">
    <a href="https://github.com/nonoroazoro/eslint-config-zoro/actions/workflows/ci.yml">
        <img src="https://github.com/nonoroazoro/eslint-config-zoro/actions/workflows/ci.yml/badge.svg" alt="GitHub CI" />
    </a>
    <a href="https://github.com/nonoroazoro/eslint-config-zoro/blob/master/LICENSE">
        <img src="https://img.shields.io/npm/l/eslint-config-zoro.svg" alt="GitHub License" />
    </a>
    <a href="https://www.npmjs.com/package/eslint-config-zoro">
        <img src="https://img.shields.io/npm/dw/eslint-config-zoro.svg" alt="NPM Downloads" />
    </a>
</p>

## Installation

```sh
npm i -D eslint-config-zoro
```

## Configurations

This package exports `5` different configuration files, allowing you to combine them freely to meet your needs.

1. **[ESLint Configs](#1-eslint-config-zoroeslint)**: Consists of the `ESLint` rules, based on [ESLint rules](https://eslint.org/docs/rules).
1. **[Stylistic Configs](#2-eslint-config-zorostylistic)**: Consists of the `Stylistic` rules, based on [Stylistic rules](https://eslint.style/rules).
1. **[TypeScript Configs](#3-eslint-config-zorotypescript)**: Consists of the `TypeScript` rules, based on [TypeScript rules](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules).
1. **[React Configs](#4-eslint-config-zororeact)**: Consists of the `React` rules, based on [React rules](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules) and [React Hooks rules](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks).
1. **[Node Configs](#5-eslint-config-zoronode)**: Consists of the `Node` rules, based on [Node rules](https://github.com/eslint-community/eslint-plugin-n/tree/master/docs/rules).

## How to configure?

Since the `eslintrc` format is deprecated from `ESLint v9.0.0` and will be completely removed in `v10.0.0`, you should use `eslint.config.js` to configure ESLint.

> See [ESLint Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide).

After migration, you can easily import and configure settings in your `eslint.config.js` file:

```javascript
// eslint.config.js
import { ESLINT_CONFIGS } from "eslint-config-zoro/eslint";

export default [
  ...ESLINT_CONFIGS,
  {
    rules: {
        // Add your custom configurations here.
      "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "@stylistic/indent-binary-ops": ["error", 2],
      "@stylistic/indent": ["error", 2, { "SwitchCase": 1 }]
    }
  }
];
```

You can also customize by combining configuration files as needed, such as:

```javascript
import { ESLINT_CONFIGS } from "eslint-config-zoro/eslint";
import { STYLISTIC_CONFIGS } from "eslint-config-zoro/stylistic";
import { TYPESCRIPT_CONFIGS } from "eslint-config-zoro/typescript";

export default [
  ...ESLINT_CONFIGS,
  ...STYLISTIC_CONFIGS,
  ...TYPESCRIPT_CONFIGS
];
```

### 1. eslint-config-zoro/eslint

This configuration only contains the `ESLint` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint
    ```

1. Add to your `eslint.config.js` file:

    ```javascript
    // eslint.config.js
    import { ESLINT_CONFIGS } from "eslint-config-zoro/eslint";

    export default [...ESLINT_CONFIGS];
    ```

### 2. eslint-config-zoro/stylistic

This configuration only contains the `Stylistic` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @stylistic/eslint-plugin
    ```

1. Add to your `eslint.config.js` file:

    ```javascript
    // eslint.config.js
    import { STYLISTIC_CONFIGS } from "eslint-config-zoro/stylistic";

    export default [...STYLISTIC_CONFIGS];
    ```

### 3. eslint-config-zoro/typescript

This configuration only contains the `TypeScript` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

1. Add to your `eslint.config.js` file:

    ```javascript
    // eslint.config.js
    import { TYPESCRIPT_CONFIGS } from "eslint-config-zoro/typescript";

    export default [...TYPESCRIPT_CONFIGS];
    ```

### 4. eslint-config-zoro/react

This configuration only contains the `React` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint eslint-plugin-react eslint-plugin-react-hooks
    ```

1. Add to your `eslint.config.js` file:

    ```javascript
    // eslint.config.js
    import { REACT_CONFIGS } from "eslint-config-zoro/react";

    export default [...REACT_CONFIGS];
    ```

### 5. eslint-config-zoro/node

This configuration only contains the `Node` rules.

1. Install:

    ```sh
    npm i -D eslint-config-zoro eslint eslint-plugin-n
    ```

1. Add to your `eslint.config.js` file:

    ```javascript
    // eslint.config.js
    import { NODE_CONFIGS } from "eslint-config-zoro/node";

    export default [...NODE_CONFIGS];
    ```

## Where to ask for help?

- [ESLint Rules](http://eslint.org/docs/rules)
- [ESLint Rules - React](https://github.com/yannickcr/eslint-plugin-react)
- [ESLint Rules - React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [ESLint Rules - TypeScript](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin)
- [ESLint Rules - Node](https://github.com/eslint-community/eslint-plugin-n)
- [ESLint Rules - Stylistic](https://eslint.style/rules)
