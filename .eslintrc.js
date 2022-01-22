module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    quotes: ["off", "single"],
    "linebreak-style": 0,
  },
};
