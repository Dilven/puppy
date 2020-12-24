module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    'no-redeclare': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'max-len': ['error', { code: 135 }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-props-no-spreading': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
