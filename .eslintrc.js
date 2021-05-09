module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
      },
      typescript: {},
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    /** react hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/static-property-placement': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-curly-newline': 'off',

    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-void': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
  },
  globals: {
    __CONFIG__: 'readonly',
    ValueOf: 'readonly',
    AsyncReturnType: 'readonly',
    PromiseType: 'readonly',
  },
};
