module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/jsx-runtime'],
  plugins: ['import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-key': ['warn'],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'never' },
    ],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-boolean-value': ['error', 'never'],
    'no-nested-ternary': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
