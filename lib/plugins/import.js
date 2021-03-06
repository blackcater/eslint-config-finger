/**
 * ESLint Plugin  -----  eslint-plugin-import
 */
const MAX_DEPENDENCIES = 10

module.exports = {
  env: { es6: true },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },

  plugins: ["import"],

  settings: {
    "import/resolver": { node: { extensions: [".js", ".json"] } },
    "import/extensions": [
      ".js",
      ".jsx",
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|styl|hbs|svg|json)$",
    ],
  },

  rules: {
    // ---- eslint-plugin-import ----
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "off",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "tests/**",
          "spec/**",
          "build/**",
          "**/__tests__/**",
          "test.js",
          "test-*.js",
          "**/*.test.js",
          "**/*.spec.js",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
          "**/rollup.config.js",
          "**/gulpfile.js",
          "**/gulpfile.*.js",
          "**/Gruntfile",
        ],
        optionalDependencies: false,
      },
    ],
    "import/no-mutable-exports": "error",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    "import/first": [
      "error",
      "absolute-first",
    ],
    "import/imports-first": "off",
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
      },
    ],
    "import/order": [
      "off",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "never",
      },
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/no-restricted-paths": "off",
    "import/max-dependencies": [
      "off",
      { max: MAX_DEPENDENCIES },
    ],
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": [
      "off",
      { allow: [] },
    ],
    "import/unambiguous": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "error",
  },
}
