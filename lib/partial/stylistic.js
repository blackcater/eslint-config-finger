const MAX_DEPTH = 4
const MAX_NESTED_CALLBACKS = 3
const MAX_PARAMS = 4

module.exports = {
  "rules": {
    "array-bracket-spacing": [
      "error",
      "never",
    ],
    "block-spacing": [
      "error",
      "always",
    ],
    "brace-style": "error",
    "camelcase": "off",
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
    "eol-last": "off",
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
    "func-style": "off",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "indent": "off",
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
    "lines-around-directive": "off",
    "max-depth": [
      "error",
      MAX_DEPTH,
    ],
    "max-len": "off",
    "max-lines": "off",
    "max-nested-callbacks": [
      "error",
      MAX_NESTED_CALLBACKS,
    ],
    "max-params": [
      "error",
      MAX_PARAMS,
    ],
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    "new-parens": "error",
    "newline-after-var": [
      "error",
      "always",
    ],
    "newline-before-return": "error",
    "newline-per-chained-call": [
      "error",
      { ignoreChainWithDepth: 2 },
    ],
    "no-array-constructor": "error",
    "no-bitwise": "off",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      { allowSamePrecedence: true },
    ],
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-assign": "off",
    "no-multiple-empty-lines": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "off",
    "no-new-object": "error",
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      "WithStatement",
    ],
    "no-tabs": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "off",
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
      {
        "overrides": {
          "?": "before",
          ":": "before",
        },
      },
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
          "ClassDeclaration": false,
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
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": [
      "error",
      "always",
    ],
    "space-before-function-paren": "error",
    "space-in-parens": [
      "error",
      "never",
    ],
    "space-infix-ops": [
      "error",
      { "int32Hint": true },
    ],
    "space-unary-ops": "error",
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
    // es6
    "template-tag-spacing": "error",
    "unicode-bom": "off",
    "wrap-regex": "error",
  },
}
