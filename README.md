<h1 align="center">Zoro's ESLint Configuration</h1>
<p align="center">A fully customized <b>ESLint configuration</b> based on <i>ESLint</i>, <i>Stylistic</i>, <i>Perfectionist</i>, <i>TypeScript</i>, <i>React</i> and <i>Node</i> rules.</p>
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
npm i -D eslint-config-zoro eslint @stylistic/eslint-plugin eslint-plugin-perfectionist
```

## Usage

Use `defineConfig` to generate ESLint configuration in your `eslint.config.mjs` file:

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig();
```

## Core Presets

The following presets are **always enabled** and cannot be opted out:

| Preset | Description |
| ------ | ----------- |
| [ESLint](https://eslint.org/docs/rules) | ESLint rules |
| [Stylistic](https://eslint.style/rules) | Style rules |
| [Perfectionist](https://perfectionist.dev/rules) | Sorting rules |

## Optional Presets

Enable optional presets by passing options to `defineConfig`, see [Examples](#examples):

| Option | Preset | Required Dependencies |
| ------ | ------ | -------------------------- |
| `typescript` | [TypeScript](https://typescript-eslint.io/rules) | `@typescript-eslint/parser` `@typescript-eslint/eslint-plugin` |
| `react` | [React](https://github.com/jsx-eslint/eslint-plugin-react) + [React Hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) | `eslint-plugin-react` `eslint-plugin-react-hooks` |
| `node` | [Node](https://github.com/eslint-community/eslint-plugin-n) | `eslint-plugin-n` |

## Examples

### TypeScript Project

```sh
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig({
    typescript: true
});
```

### React + TypeScript Project

```sh
npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig({
    typescript: true,
    react: true
});
```

### Node.js Project

```sh
npm i -D eslint-plugin-n
```

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig({
    node: true
});
```

### Custom Rules and Ignores

```javascript
// eslint.config.mjs
import { defineConfig } from "eslint-config-zoro";

export default defineConfig({
    typescript: true,
    ignores: ["dist/**"],
    rules: {
        "@stylistic/indent": ["error", 2]
    }
});
```

## Resources

- [ESLint Rules](https://eslint.org/docs/rules)
- [Stylistic Rules](https://eslint.style/rules)
- [Perfectionist Rules](https://perfectionist.dev/rules)
- [TypeScript Rules](https://typescript-eslint.io/rules)
- [React Rules](https://github.com/jsx-eslint/eslint-plugin-react)
- [React Hooks Rules](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
- [Node Rules](https://github.com/eslint-community/eslint-plugin-n)
