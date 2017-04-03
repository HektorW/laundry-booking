module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
  },
  "plugins": ["node"],
  "extends": ["eslint:recommended", "plugin:node/recommended"],
    "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "never"],
    "generator-star-spacing": ["error", "after"],
    "comma-dangle": ["error", "always-multiline"],
    "require-yield": 0,
  }
};
