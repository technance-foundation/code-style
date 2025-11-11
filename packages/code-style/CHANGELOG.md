# @technance/code-style

## 1.5.3

### Patch Changes

- [#54](https://github.com/technance-foundation/code-style/pull/54) [`2f8a1f6`](https://github.com/technance-foundation/code-style/commit/2f8a1f6a41b571fac20d968a7dd7fcbb8eca3f77) Thanks [@inf1nite-lo0p](https://github.com/inf1nite-lo0p)! - Fix missing `@typescript-eslint` plugin in package.json ESLint config

## 1.5.2

### Patch Changes

- [#51](https://github.com/technance-foundation/code-style/pull/51) [`31e871e`](https://github.com/technance-foundation/code-style/commit/31e871ed92391d32dcd7309e05d7800ec05d1f3a) Thanks [@afsoonaslanii](https://github.com/afsoonaslanii)! - Remove undefined biome export from module exports

## 1.5.1

### Patch Changes

- [#47](https://github.com/technance-foundation/code-style/pull/47) [`8d127d1`](https://github.com/technance-foundation/code-style/commit/8d127d14d79983ffe1bb86900bfb24d03bc18aab) Thanks [@afsoonaslanii](https://github.com/afsoonaslanii)! - Add @biomejs/biome to list of peer dependencies

## 1.5.0

### Minor Changes

- [#40](https://github.com/technance-foundation/code-style/pull/40) [`8dda166`](https://github.com/technance-foundation/code-style/commit/8dda166a7e8792dbc2b3379c1838ca70daf62864) Thanks [@afsoonaslanii](https://github.com/afsoonaslanii)! - Add shared Biome configuration for all apps/packages

- [#39](https://github.com/technance-foundation/code-style/pull/39) [`e8dfda2`](https://github.com/technance-foundation/code-style/commit/e8dfda258b1c75fd084013905b667ae8c708f275) Thanks [@afsoonaslanii](https://github.com/afsoonaslanii)! - Update all dependencies to latest version

## 1.4.2

### Patch Changes

- [#35](https://github.com/technance-foundation/code-style/pull/35) [`b69cfd9`](https://github.com/technance-foundation/code-style/commit/b69cfd90abe57f590e17d06d0f9cae10f89294a5) Thanks [@rzvxa](https://github.com/rzvxa)! - Remove duplicate `@typescript-eslint/eslint-plugin` imports from `general.js`, `nest.js`, `node.js`, and `react.js`.

    These configs already include the plugin via `typescript-eslint`'s flat configs, so manually re-registering it caused ESLint > 9.19 to throw:

    ```
    ConfigError: Key "plugins": Cannot redefine plugin "@typescript-eslint"
    ```

    This patch cleans up the redundant imports and plugin entries, ensuring compatibility with ESLint 9.19+ while keeping behavior unchanged.
