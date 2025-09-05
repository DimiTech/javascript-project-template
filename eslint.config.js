import importPlugin from 'eslint-plugin-import'

export default [
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'docs/**',
      '**/*.d.ts',
      '**/generated/**',
    ],
  },

  // JavaScript files configuration
  {
    files: ['**/*.js'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
        },
      },
    },
    rules: {
      // General rules
      'no-console': 'warn',
      eqeqeq: 'error',
      curly: 'error',
      'no-use-before-define': 'error',
      'comma-dangle': ['warn', 'only-multiline'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-duplicate-imports': 'error',

      // Functions
      'max-params': ['error', 4],

      // ES6
      'object-shorthand': 'error',

      // Import ordering rules (PEP8-like)
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          pathGroupsExcludedImportTypes: ['builtin', 'external'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
    },
  },
]
