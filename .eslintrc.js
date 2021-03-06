module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
    indent: 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'no-continue': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-case-declarations': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/jsx-tag-spacing': [
      2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'no-multi-spaces': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-max-props-per-line': [2, { when: 'multiline' }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'class-methods-use-this': 0,
    'no-return-await': 0,
    'no-console': 0,
    'react/display-name': 0,
    'react/jsx-indent-props': [2, 2],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/sort-styles': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-use-before-define': 'off',
    'linebreak-style': 0,
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules'],
      },
    },
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true,
  },
};
