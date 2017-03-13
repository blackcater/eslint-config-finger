/**
 * normal configuration for javascript
 * 
 * 0: "off"
 * 1: "warn"
 * 2: "error"
 */
module.exports = {
  "extends": "eslint:recommended",
  "ecmaVersion": 6,
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    // ---- COMMON ----
    // Possible Errors
    "no-console": 1,
    "no-alert": 1,
    "no-extra-parens": 2,
    "no-prototype-builtins": 2,
    "no-regex-spaces": 1,
    "no-template-curly-in-string": 2, // es6
    "no-unsafe-negation": 2,
    "valid-jsdoc": 1,
    // Best Practices
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
    "no-empty-pattern": 2, // es6
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extra-bind": 2,
    // "no-extra-label": 2,
    "no-fallthrough": 0,
    "no-floating-decimal": 2,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-labels": 2, // no need "no-extra-label"
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
        "allowShortCircuit": true,
        "allowTernary": true,
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
    // Variables
    "init-declarations": [
      "warn",
      "always",
    ],
    "no-catch-shadow": 2,
    "no-delete-var": 0,
    // "no-label-var": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    // "no-undef-init": 2,
    "no-undefined": 2,
    "no-use-before-define": 2,

    "no-restricted-syntax":[
      "error",
      "WithStatement",
    ],
  },
}
