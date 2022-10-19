module.exports = {
  env: {
    node: true,
    es2021: true,
    mocha: true,
  },

  plugins: ['prettier'],

  extends: ['eslint:recommended'],

  rules: {
    'prettier/prettier': ['error'],

    // General rules
    'no-console': 'warn',
    eqeqeq: 'error',
    curly: 'error',
    'no-use-before-define': 'error',
    'comma-dangle': ['warn', 'only-multiline'],

    // Semicolons
    semi: ['error', 'never'],
    'semi-spacing': 'error',

    // Spacing & linebreaks
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-tabs': 'error',
    'space-before-blocks': 'error',
    'array-bracket-spacing': 'warn',
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'eol-last': ['error', 'always'],
    'computed-property-spacing': ['error', 'never'],
    'space-infix-ops': 'error',
    'switch-colon-spacing': 'error',
    'space-in-parens': ['error', 'never'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'no-trailing-spaces': 'error',

    // Variables
    'no-var': 'error',
    'prefer-const': 'warn',

    // If-else statements
    'no-lonely-if': 'error',

    // Functions
    'max-params': ['error', 4],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // Object constructors
    'new-parens': 'error',

    // Comments
    'spaced-comment': ['error', 'always'],
    'valid-jsdoc': 'error',

    // ES6
    'arrow-spacing': 'error',
    'object-shorthand': 'error',
  },
}
