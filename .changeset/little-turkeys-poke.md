---
"@technance/code-style": patch
---

Remove duplicate `@typescript-eslint/eslint-plugin` imports from `general.js`, `nest.js`, `node.js`, and `react.js`.

These configs already include the plugin via `typescript-eslint`'s flat configs, so manually re-registering it caused ESLint > 9.19 to throw:

```
ConfigError: Key "plugins": Cannot redefine plugin "@typescript-eslint"
```

This patch cleans up the redundant imports and plugin entries, ensuring compatibility with ESLint 9.19+ while keeping behavior unchanged.
