# JavaScript Project Template

![GitHub Actions Workflow](https://github.com/DusanDimitric/javascript-project-template/actions/workflows/node.js.yml/badge.svg)

A modern JavaScript project template with ES modules, Node.js native packages, and comprehensive tooling.

## Features

- **Modern JavaScript**: ES modules with Node.js native packages
- **Linting**: ESLint with flat config and import ordering
- **Formatting**: Prettier with JSON configuration
- **Testing**: Node.js native test runner with coverage
- **Pre-commit hooks**: Husky with automatic fixes
- **Dependency checking**: Unused and circular dependency detection
- **CI/CD**: GitHub Actions with Node.js 20.x and 22.x

## Code Style

The project uses a clean separation of concerns:

- **ESLint**: Handles code quality and logic rules (no formatting conflicts)
- **Prettier**: Handles all code formatting and style
- **Import ordering**: PEP8-like rules with automatic sorting

### Auto-fix on Save

Configured for VS Code/Cursor with automatic fixes:

- **Import ordering**: Built-in modules → External packages → Local modules
- **Code formatting**: Automatic Prettier formatting
- **ESLint fixes**: Auto-fixable code quality issues

### Manual Commands

```bash
# Fix all ESLint issues (including import ordering)
npm run lint:fix

# Format all files with Prettier
npm run pretty:fix

# Check for unused dependencies
npm run check-unused-dependencies

# Check for circular dependencies
npm run check-circular-dependencies
```

## Pre-commit Hooks

Every commit automatically runs:

1. **Lint fixes**: `npm run lint:fix` - Fixes all ESLint issues
2. **Format fixes**: `npm run pretty:fix` - Formats all files
3. **Dependency checks**: Unused and circular dependency detection
4. **Tests**: Full test suite with coverage

## Code Coverage

Coverage watermarks are defined in: `.c8rc.json`.

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the app
```bash
npm start
```

### 3. Run tests
```bash
npm test
```

### 4. Development workflow
- **Auto-fix on save**: VS Code/Cursor automatically fixes imports and formatting
- **Manual fixes**: Use `npm run lint:fix` and `npm run pretty:fix` when needed
- **Pre-commit**: All fixes run automatically before each commit

## Project Structure

```
├── src/                    # Source code
│   ├── greet/             # Example module
│   └── main.js            # Entry point
├── test/                  # Test files
├── .husky/                # Git hooks
├── .github/workflows/     # CI/CD
├── eslint.config.js       # ESLint flat config
├── .prettierrc.json       # Prettier configuration
└── package.json           # Dependencies and scripts
```

## Node.js Version

This project uses modern Node.js features and requires Node.js 20.x or higher.# Test fix
