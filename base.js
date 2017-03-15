/**
 * Basic configuration for javascript
 *
 * You can use it in any projects written with JavaScript
 */
const MAX_DEPTH = 4
const MAX_NESTED_CALLBACKS = 3
const MAX_PARAMS = 4

module.exports = {
  "extends": "eslint:recommended",
  "env": { "browser": true },
  "parserOptions": { "impliedStrict": true },
  "rules": {
    // ---- COMMON ----
    // ---- Possible Errors ----
    "no-console": 1,
    "no-alert": 1,
    "no-extra-parens": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 1,
    "no-unsafe-negation": 2,
    "valid-jsdoc": 1,

    // ---- Best Practices ----
    "accessor-pairs": 2,
    "consistent-return": 2,
    "block-scoped-var": 2,
    "default-case": 2,
    "dot-location": [
      "error",
      "property",
    ],
    "dot-notation": 2,
    "eqeqeq": 2,
    "no-caller": 1,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    // "no-extra-label": 2,
    "no-fallthrough": 0,
    "no-floating-decimal": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    // No need "no-extra-label"
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 0,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    // "no-unused-labels": 2,
    "no-useless-call": 2,
    "no-useless-concat": 1,
    "no-useless-escape": 2,
    "no-useless-return": 2,
    "no-void": 2,
    "no-with": 2,
    "prefer-promise-reject-errors": 2,
    "vars-on-top": 2,
    "wrap-iife": [
      "error",
      "inside",
    ],

    // ---- Variables ----
    // "init-declarations": [
    //   "warn",
    //   "always",
    // ],
    "no-catch-shadow": 2,
    "no-delete-var": 0,
    // "no-label-var": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    // "no-undef-init": 2,
    "no-undefined": 2,
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": false,
        "variables": true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "all",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
      },
    ],

    // ---- Node.js and CommonJS ----
    "callback-return": 2,
    "global-require:": 0,
    "handle-callback-err": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 2,

    // ---- Stylistic Issues ----
    "array-bracket-spacing": [
      "error",
      "never",
    ],
    "block-spacing": [
      "error",
      "always",
    ],
    "brace-style": 2,
    "camelcase": 0,
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [
      "error",
      "first",
      {
        exceptions: {
          ArrayExpression: true,
          ObjectExpression: true,
        },
      },
    ],
    "computed-property-spacing": [
      "error",
      "never",
    ],
    "consistent-this": [
      "error",
      "self",
    ],
    "func-call-spacing": [
      "error",
      "never",
    ],
    "func-name-matching": [
      "warn",
      "always",
    ],
    "func-names": [
      "error",
      "as-needed",
    ],
    "func-style": [
      "error",
      "declaration",
      { allowArrowFunctions: true },
    ],
    "jsx-quotes": [
      "error",
      "prefer-double",
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "line-comment-position": [
      "error",
      { position: "above" },
    ],
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],
    "max-depth": [
      "error",
      MAX_DEPTH,
    ],
    "max-nested-callbacks": [
      "error",
      MAX_NESTED_CALLBACKS,
    ],
    "max-params": [
      "error",
      MAX_PARAMS,
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    "new-parens": 2,
    "newline-after-var": [
      "error",
      "always",
    ],
    "newline-before-return": 2,
    "newline-per-chained-call": [
      "error",
      { ignoreChainWithDepth: 2 },
    ],
    "no-array-constructor": 2,
    "no-lonely-if": 2,
    "no-mixed-operators": [
      "error",
      { allowSamePrecedence: true },
    ],
    "no-new-object": 2,
    "no-restricted-syntax": [
      "error",
      "WithStatement",
    ],
    "no-trailing-spaces": 2,
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
        },
        ObjectPattern: { minProperties: 4 },
      },
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "object-property-newline": [
      "error", { allowMultiplePropertiesPerLine: true },
    ],
    "one-var": [
      "error",
      { uninitialized: "always" },
    ],
    "one-var-declaration-per-line": [
      "error",
      "initializations",
    ],
    "operator-assignment": [
      "error",
      "always",
    ],
    "operator-linebreak": [
      "error",
      "after",
    ],
    "padded-blocks": [
      "error",
      {
        blocks: "never",
        classes: "always",
      },
    ],
    "quote-props": [
      "error",
      "as-needed",
      {
        keywords: true,
        numbers: true,
        unnecessary: false,
      },
    ],
    "quotes": [
      "error",
      "double",
    ],
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true,
          "ArrowFunctionExpression": false,
        },
      },
    ],
    "semi": [
      "error",
      "never",
    ],
    "semi-spacing": [
      "error", {
        "before": false,
        "after": true,
      },
    ],
    "space-before-blocks": [
      "error",
      "always",
    ],
    "space-before-function-paren": 2,
    "space-in-parens": [
      "error",
      "never",
    ],
    "space-infix-ops": [
      "error",
      { "int32Hint": true },
    ],
    "space-unary-ops": 2,
    "spaced-comment": [
      "error",
      "always",
      {
        "line": { "exceptions": ["="] },
        "block": {
          "exceptions": ["*"],
          "balanced": true,
        },
      },
    ],
    "wrap-regex": 2,
  },
}
