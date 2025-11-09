# Code Style Smoke Tests

This package contains smoke tests to verify that Biome, ESLint, and Prettier configurations are working correctly.

## 📁 Structure

```
next-smoke/
├── src/
│   ├── biome/
│   │   ├── good.ts    ✅ Should pass Biome checks
│   │   └── bad.ts     ❌ Should fail Biome checks
│   ├── eslint/
│   │   ├── good.tsx   ✅ Should pass ESLint checks
│   │   └── bad.tsx    ❌ Should fail ESLint checks
│   └── prettier/
│       ├── good.js    ✅ Should pass Prettier checks
│       └── bad.js     ❌ Should fail Prettier checks
└── tests/
    └── smoke.test.ts  🧪 Main test suite
```

## 🚀 Usage

### Install dependencies

```bash
pnpm install
```

### Run smoke tests

```bash
pnpm test
```

This will run all smoke tests using Vitest and verify that:

- Good files pass their respective tool checks
- Bad files fail their respective tool checks

### Run individual tools

```bash
# Check a file with Biome
pnpm biome check src/biome/good.ts

# Lint a file with ESLint
pnpm eslint src/eslint/good.tsx

# Check formatting with Prettier
pnpm prettier --check src/prettier/good.js
```

## ✅ Expected Behavior

When you run `pnpm test`, you should see:

- ✅ Biome good.ts passes
- ❌ Biome bad.ts fails (contains linting errors)
- ✅ ESLint good.tsx passes
- ❌ ESLint bad.tsx fails (missing keys, unused vars, etc.)
- ✅ Prettier good.js passes
- ❌ Prettier bad.js fails (incorrect formatting)

## 🎯 Purpose

These smoke tests ensure that:

1. The code style configurations are properly set up
2. The tools are correctly installed and working
3. The rules are being enforced as expected
4. Integration with CI/CD pipelines works correctly

## 🔧 CI Integration

To run these tests in CI, use:

```bash
pnpm install
pnpm vitest run
```
