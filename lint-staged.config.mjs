export default {
  "src/**/*.{ts,tsx,js,jsx}": [
    "eslint",
    "prettier --write",
    () => "tsc -p tsconfig.app.json --noEmit",
  ],
};