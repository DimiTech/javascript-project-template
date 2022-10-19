# JavaScript Project Template

![GitHub Actions Workflow](https://github.com/DusanDimitric/javascript-project-template/actions/workflows/node.js.yml/badge.svg)

## Features
```
- Linting             : eslint
- Formatting          : prettier
- Pre commit hooks    : husky, lint-staged
- Testing             : mocha
- Coverage            : nyc
- Dependency Checking : depcheck, madge
- CI                  : .github/workflows/node.js.yml
```

## Code Style

Style is enforced by `eslint` and `prettier`. Make sure to configure these
tools in your Editor or IDE, and make sure that they work properly.

`eslint-plugin-prettier` runs `prettier` as an `eslint` rule and reports
differences as individual `eslint` issues.

## Code Coverage

Coverage watermarks are defined in: `nyc.config.js`.

## Running the App

### 1. Use the appropriate Node version

Install and use [nvm](https://github.com/nvm-sh/nvm) for Node version
management. The `.nvmrc` file contains the currently used Node version for the
project, after cloning this repository, run:
```
nvm use
```

### 2. Install dependencies
```
npm i
```

### 3. Run tests
```
npm test
```

### 4. Run the App
```
npm start
```
