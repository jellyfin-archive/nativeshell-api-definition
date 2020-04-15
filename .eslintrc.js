module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/interface-name-prefix": ["error", "always"],
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/array-type": ["error", { default: "array-simple" }]
    }
};
