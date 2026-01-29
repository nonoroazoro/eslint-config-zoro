# Changelog

## [9.0.7] - 2026-01-29

### Fixed

- Fix d.ts files issue.

## [9.0.6] - 2026-01-26

### Changed

- Set `flatTernaryExpressions` to `true`.
- Set `allowSingleElementEquality` to `always`.

## [9.0.5] - 2026-01-23

### Changed

- Turn off `perfectionist/sort-modules`.

## [9.0.4] - 2026-01-23

### Changed

- Tweak `perfectionist/sort-import`.

## [9.0.3] - 2026-01-23

### Changed

- Turn off `perfectionist/sort-classes`.
- Turn off `perfectionist/sort-decorators`.

## [9.0.2] - 2026-01-23

### Added

- Add tests for `importPackage`.

### Removed

- Remove custom dependencies check.

## [9.0.1] - 2026-01-22

### Changed

- Switch to dynamic plugin loading to avoid errors when optional dependencies are not installed.

## [9.0.0] - 2026-01-21

### Breaking Changes

- Use `defineConfig` as the single entry point for configuration generation. The previous multiple config imports (`ESLINT_CONFIGS`, `STYLISTIC_CONFIGS`, etc.) are no longer supported.
- Use `eslint-plugin-perfectionist` as a core preset (always enabled).

### Migrate to v9.x

v9.0.0 is a major release and has several breaking changes that you need to be aware of.

**Before**:

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

**After**:

```javascript
import { defineConfig } from "eslint-config-zoro";

export default defineConfig({
    typescript: true
});
```

## [8.0.3] - 2026-01-13

### Changed

- Allow separate type imports in rule `no-duplicate-imports`.

## [8.0.2] - 2026-01-13

### Changed

- Disable `@typescript-eslint/no-empty-function`.

## [8.0.1] - 2026-01-12

### Changed

- Set arrow spacing to `{ before: true, after: true }`.

## [8.0.0] - 2026-01-01

### Changed

- Upgrade all packages and fix issues.
- Migrate to vitest and fulfill tests.

## [7.1.16] - 2025-09-19

### Changed

- Fix `@stylistic/generator-star-spacing`'s options.

### Removed

- Remove deprecated rule `@stylistic/jsx-props-no-multi-spaces`.

## [7.1.15] - 2025-09-19

### Changed

- Unify generator-star format by adjusting `@stylistic/generator-star-spacing`'s options.

## [7.1.14] - 2025-09-19

### Changed

- Disable `@typescript-eslint/no-unnecessary-condition` as it's not work as expected.

## [7.1.13] - 2025-09-08

### Changed

- Disable `no-var` in TypeScript declaration files.

## [7.1.12] - 2025-09-04

### Changed

- Disable `@typescript-eslint/no-unsafe-call` and `@typescript-eslint/no-unsafe-member-access` in vanilla JavaScript files.

## [7.1.11] - 2025-08-28

### Changed

- `@stylistic/jsx-wrap-multilines` set to prop ignore.

## [7.1.10] - 2025-08-27

### Changed

- `@stylistic/generator-star-spacing` set to anonymous neither.
- `react/jsx-props-no-spreading` allow html.

## [7.1.9] - 2025-08-26

### Changed

- Change `@stylistic/dot-location` to property.
- Disable `react/require-default-props`.

### Removed

- Remove deprecated rule `@stylistic/jsx-indent`.

## [7.1.8] - 2025-08-25

### Changed

- Tweak configurations guide.

## [7.1.7] - 2025-08-22

### Changed

- Disable `@typescript-eslint/no-redeclare`.
- Disable `no-implicit-globals`.

### Fixed

- Fix `@stylistic/member-delimiter-style` and `@stylistic/operator-linebreak`.

## [7.1.6] - 2025-08-22

### Fixed

- Fix `@typescript-eslint/prefer-nullish-coalescing`.

## [7.1.5] - 2025-08-22

### Fixed

- Fix `@stylistic/type-annotation-spacing`.

## [7.1.4] - 2025-08-22

### Changed

- Disable `@typescript-eslint/consistent-type-exports`.

## [7.1.3] - 2025-08-22

### Changed

- Adjust `@typescript-eslint/naming-convention` and `@typescript-eslint/no-require-imports`.
- Adjust `@stylistic/lines-around-comment`.

## [7.1.2] - 2025-08-22

### Fixed

- Export node configs.

## [7.1.1] - 2025-08-22

### Fixed

- Fix node rules.
- Fix module exports.

## [7.1.0] - 2025-08-21

### Changed

- Upgrade all packages and fix issues.

## [7.0.0-beta.3] - 2024-09-09

### Fixed

- Fix index.

## [7.0.0-beta.2] - 2024-09-09

### Fixed

- Fix package.json.

## [7.0.0-beta.1] - 2024-09-09

### Fixed

- Fix all issues introduced by Eslint 9.

## [7.0.0-beta.0] - 2024-09-09

### Added

- Add `@stylistic/eslint-plugin`.

### Changed

- Synchronize version with `@typescript-eslint`.

## [6.1.0] - 2024-05-10

### Changed

- Synchronize version with `@typescript-eslint`.

## [6.0.1] - 2023-09-25

### Changed

- Disable `@typescript-eslint/no-unsafe-enum-comparison` by default.

## [6.0.0] - 2023-09-25

### Changed

- Synchronize version with `@typescript-eslint`.

## [5.54.0] - 2023-03-09

### Changed

- Synchronize version with `@typescript-eslint`.

## [5.35.0] - 2022-12-09

### Changed

- Synchronize version with `@typescript-eslint`.

## [5.34.0] - 2022-08-24

### Changed

- Synchronize version with `@typescript-eslint`.
- Disable `prefer-object-has-own` by default.

## [5.30.0] - 2022-07-07

### Changed

- Synchronize version with `@typescript-eslint`.

## [5.29.0] - 2022-05-31

### Changed

- Disable `node/global-require` by default.
- Synchronize version with `@typescript-eslint`.

## [5.27.0] - 2022-05-31

### Added

- Add `overrideMethods` to rule `@typescript-eslint/no-empty-function`.

### Changed

- Synchronize version with `@typescript-eslint` and `eslint-plugin-react`.
- Enable `react/jsx-no-leaked-render` and `@typescript-eslint/no-duplicate-enum-values` by default.

## [5.15.5] - 2022-04-11

### Changed

- Disable node/no-missing-import and node/no-missing-require.

## [5.15.4] - 2022-04-11

### Changed

- Disable node/no-extraneous-require.

## [5.15.3] - 2022-04-08

### Changed

- Ignore jsx and tsx for node rules.

## [5.15.2] - 2022-04-08

### Changed

- Disable node/no-unpublished-import, node/no-unpublished-require and node/no-unsupported-features/es-syntax.

## [5.15.1] - 2022-04-08

### Fixed

- Fix rule react/hook-use-state.

## [5.15.0] - 2022-04-08

### Changed

- Synchronize version with @typescript-eslint and eslint-plugin-react.

## [5.14.0] - 2022-03-08

### Added

- Add node config file.

## [5.13.0] - 2022-03-07

### Changed

- Synchronize version with @typescript-eslint and eslint.

## [5.12.1] - 2022-02-23

### Changed

- Synchronize version with @typescript-eslint.

## [5.9.0] - 2022-01-01

### Changed

- Synchronize version with @typescript-eslint.

## [5.8.1] - 2021-12-28

### Changed

- Synchronize version with @typescript-eslint and eslint-plugin-react.

## [5.8.0] - 2021-12-22

### Changed

- Synchronize version with @typescript-eslint.

## [5.4.0] - 2021-12-09

### Changed

- Synchronize version with @typescript-eslint.

## [5.3.2] - 2021-12-01

### Changed

- Disable @typescript-eslint/prefer-regexp-exec.

## [5.3.1] - 2021-12-01

### Changed

- Set `no-cond-assign` with default options.

## [5.3.0] - 2021-12-01

### Changed

- Synchronize version with @typescript-eslint and eslint-plugin-react.

## [5.2.0] - 2021-10-28

### Added

- Add rule @typescript-eslint/consistent-type-exports.

### Changed

- Synchronize version with @typescript-eslint.

## [5.0.0] - 2021-10-13

### Changed

- Synchronize version with @typescript-eslint.

## [4.31.0] - 2021-09-16

### Changed

- Synchronize version with @typescript-eslint.
- Enable rule @typescript-eslint/no-meaningless-void-operator.

## [4.30.0] - 2021-09-01

### Changed

- Synchronize version with @typescript-eslint.
- Disable rule @typescript-eslint/indent.

## [4.28.0] - 2021-06-22

### Changed

- Synchronize version with @typescript-eslint.

## [4.5.1] - 2021-05-24

### Changed

- Disable react/react-in-jsx-scope by default, please use the [new JSX Transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) to run your code.

## [4.5.0] - 2021-05-18

### Added

- Add rules react/no-unstable-nested-components and @typescript-eslint/no-unsafe-argument.

## [4.4.1] - 2021-03-19

### Changed

- Enable rule @typescript-eslint/consistent-type-imports.

## [4.4.0] - 2021-03-19

### Changed

- Upgrade to @typescript-eslint version 4.18.0.
- Enable rule @typescript-eslint/indent.

## [4.3.0] - 2021-03-05

### Changed

- Upgrade to @typescript-eslint version 4.16.1.

## [4.2.2] - 2021-01-18

### Changed

- Enable rule @typescript-eslint/sort-type-union-intersection-members.

## [4.2.1] - 2021-01-11

### Changed

- Disable rule @typescript-eslint/sort-type-union-intersection-members.

## [4.0.1] - 2020-11-17

### Changed

- Comment out unreleased rules.

## [4.0.0] - 2020-11-17

### Changed

- Upgrade to @typescript-eslint version 4.8.0.

## [3.2.0] - 2020-10-12

### Changed

- Upgrade to @typescript-eslint version 4.4.0.

## [3.1.4] - 2020-09-04

### Changed

- Ignore args in no-unused-vars and @typescript-eslint/no-unused-vars.

## [3.1.3] - 2020-09-01

### Changed

- Use @typescript-eslint/no-shadow instead of no-shadow.

## [3.1.2] - 2020-09-01

### Changed

- Disable jsx-handler-names.

## [3.1.1] - 2020-09-01

### Changed

- Disable consistent-type-imports.

## [3.1.0] - 2020-09-01

### Added

- Enable consistent-type-imports.
- Enable no-implicit-any-catch.

### Changed

- Enable jsx-handler-names.

## [3.0.9] - 2020-07-21

### Changed

- Upgrade packages.

## [3.0.8] - 2020-07-09

### Changed

- Allow public in no-parameter-properties.

## [3.0.7] - 2020-07-08

### Changed

- Allow classes in no-use-before-define.

## [3.0.6] - 2020-07-08

### Changed

- Enable prefer-literal-enum-member.
- Enable Function in ban-types.

## [3.0.5] - 2020-07-02

### Changed

- Disable restrict-template-expressions in vanilla JavaScript files.

## [3.0.4] - 2020-06-30

### Changed

- Upgrade to @typescript-eslint version 3.5.0.

## [3.0.3] - 2020-06-04

### Changed

- Restrict leadingUnderscore and trailingUnderscore in naming-convention convention.

## [3.0.2] - 2020-06-02

### Changed

- Allow PascalCase naming.
- Allow #region in comments.

## [3.0.1] - 2020-06-02

### Changed

- Allow PascalCase naming in React files.

## [3.0.0] - 2020-06-02

### Changed

- Upgrade to @typescript-eslint version 3.1.0.
- Update Typescript overrides.

### Removed

- Remove deprecated rules.

## [2.9.1] - 2020-05-14

### Changed

- Upgrade to @typescript-eslint version 2.33.0.

## [2.9.0] - 2020-05-06

### Changed

- Upgrade to @typescript-eslint version 2.31.0.
- Drop support for Node 8.

## [2.8.5] - 2020-04-26

### Changed

- Disable @typescript-eslint/method-signature-style.

## [2.8.4] - 2020-04-26

### Changed

- Change the default option of @typescript-eslint/method-signature-style to `method`.

## [2.8.3] - 2020-04-26

### Changed

- Upgrade to @typescript-eslint version 2.29.0.

## [2.8.2] - 2020-04-01

### Changed

- Disable @typescript-eslint/no-unnecessary-condition.

## [2.8.1] - 2020-03-31

### Changed

- Upgrade to @typescript-eslint version 2.26.0.

## [2.8.0] - 2020-03-30

### Changed

- Upgrade to @typescript-eslint version 2.25.0.

## [2.7.6] - 2020-01-16

### Changed

- Changed @typescript-eslint/member-ordering (move protected members to the front).

## [2.7.5] - 2019-12-24

### Added

- Add @typescript-eslint/no-extra-semi.
- Add @typescript-eslint/no-throw-literal.

### Changed

- Upgrade to @typescript-eslint version 2.13.0.

## [2.7.4] - 2019-12-17

### Changed

- Upgrade to @typescript-eslint version 2.12.0.

## [2.7.3] - 2019-12-06

### Changed

- Disable @typescript-eslint/no-dynamic-delete.
- Disable @typescript-eslint/no-unnecessary-condition because it's not function correctly yet.

## [2.7.2] - 2019-12-05

### Changed

- Disable @typescript-eslint/prefer-nullish-coalescing in vanilla JavaScript files.

## [2.7.1] - 2019-12-04

### Changed

- Only lint ts files with ts rules.

## [2.7.0] - 2019-12-03

### Changed

- Upgrade to @typescript-eslint version 2.10.0.
- Upgrade to eslint-plugin-react version 7.17.0.

## [2.6.4] - 2019-11-25

### Changed

- Disable @typescript-eslint/disable no-untyped-public-signature.

## [2.6.3] - 2019-11-25

### Changed

- Allow number in @typescript-eslint/restrict-template-expressions rule.

## [2.6.2] - 2019-11-22

### Added

- Add missing rules.

## [2.6.0] - 2019-11-22

### Changed

- Upgrade to @typescript-eslint version 2.8.0.
- Upgrade to eslint-plugin-react version 7.16.0.
- Upgrade to eslint-plugin-react-hooks version 2.3.0.

## [2.5.2] - 2019-08-15

### Changed

- Disable @typescript-eslint/explicit-member-accessibility.
- Disable @typescript-eslint/member-ordering while linting React.

## [2.5.1] - 2019-08-15

### Changed

- Upgrade node engines.

## [2.5.0] - 2019-08-15

### Changed

- Upgrade to @typescript-eslint version 2.0.0.

## [2.4.3] - 2019-08-13

### Changed

- Update dependencies.

## [2.4.2] - 2019-07-22

### Changed

- Disable @typescript-eslint/strict-boolean-expressions.

## [2.4.1] - 2019-07-22

### Changed

- Enable allowTemplateLiterals option of quotes.

## [2.4.0] - 2019-07-22

### Added

- Add `@typescript-eslint/no-misused-promises`.
- Add `@typescript-eslint/prefer-readonly`.
- Add `@typescript-eslint/require-await`.
- Add `@typescript-eslint/strict-boolean-expressions`.

### Changed

- Remove `@typescript-eslint/no-triple-slash-reference` in favor `@typescript-eslint/triple-slash-reference`.

## [2.3.7] - 2019-07-02

### Fixed

- Fix peerDependencies.

## [2.3.6] - 2019-07-02

### Changed

- Upgrade packages.

## [2.3.5] - 2019-06-25

### Changed

- Disable @typescript-eslint/unbound-method.

## [2.3.4] - 2019-06-25

### Changed

- Disable @typescript-eslint/no-floating-promises.

## [2.3.3] - 2019-06-25

### Changed

- Disable @typescript-eslint/promise-function-async.

## [2.3.2] - 2019-06-25

### Changed

- Disable @typescript-eslint/no-var-requires.

## [2.3.1] - 2019-06-25

### Changed

- Upgrade packages.

## [2.3.0] - 2019-06-25

### Changed

- Enable rules.

## [2.2.1] - 2019-06-03

### Changed

- Disable @typescript-eslint/prefer-regexp-exec.

## [2.2.0] - 2019-05-13

### Changed

- Update with @typescript-eslint/eslint-plugin v1.9.0 and eslint-plugin-react v7.13.0.
