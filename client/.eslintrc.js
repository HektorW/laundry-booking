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
    'import/no-unresolved': 'error',
    'node/no-unsupported-features': 0,
    'react/prop-types': 0,
  },
  globals: {
    process: false,
  },
}
