module.exports = {
  "env": { es6: true },

  "parserOptions": {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },

  "ecmaFeatures": { experimentalObjectRestSpread: true },

  "rules": {
    // ---- ECMAScript 6 ----
    "arrow-body-style": [
      "error",
      "as-needed",
    ],
    "arrow-parens": [
      "error",
      "always",
    ],
    "arrow-spacing": "error",
    "constructor-super": "error",
    "generator-star-spacing": [
      "error",
      {
        "before": true,
        "after": false,
      },
    ],
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      { "allowParens": true },
    ],
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-new-symbol": "error",
    // "no-this-before-super": "error",
    "no-restricted-imports": "off",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
        "ignoreReadBeforeAssign": true,
      },
    ],
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true,
      },
      { "enforceForRenamedProperties": false },
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never",
    ],
    "sort-imports": "off",
    "symbol-description": "error",
    "template-curly-spacing": [
      "error",
      "never",
    ],
    "yield-star-spacing": [
      "error",
      "before",
    ],
  },
}
