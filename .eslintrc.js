module.exports = {
  extends: ['airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': ['error', 'unix'],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      { html: 'enforce', custom: 'ignore' },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    document: true,
    window: true,
  },
};
