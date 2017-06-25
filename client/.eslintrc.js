module.exports = {
  parser: 'babel-eslint',
  extends: [
    '../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  env: {
    browser: true,
    node: false,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  plugins: ['react', 'import'],
  settings: {
    react: {
      pragma: 'h',
    },
    'import/resolver': 'webpack',
  },
  rules: {
    'node/no-unsupported-features': 0,
    'import/no-unresolved': 'error',
  },
}
