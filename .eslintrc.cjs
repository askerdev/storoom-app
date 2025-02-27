module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "lint-staged.config.mjs",
    "src/mock",
    "node_modules",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.app.json",
  },
  plugins: ["react-refresh", "@typescript-eslint", "prettier"],
  rules: {
    "react/no-array-index-key": "warn",
    "@typescript-eslint/no-throw-literal": 0,
    "import/extensions": 0,
    "react/require-default-props": 0,
    "no-restricted-exports": 0,
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": [
      1,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "@typescript-eslint/quotes": 0,
    "import/prefer-default-export": 0,
    "prettier/prettier": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/no-unescaped-entities": ["off"],
  },
};
