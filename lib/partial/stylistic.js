var MAX_DEPTH = 4
var MAX_NESTED_CALLBACKS = 3
var MAX_PARAMS = 4

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
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error",
      { allowSamePrecedence: true },
    ],
    "no-new-object": "error",
    "no-restricted-syntax": [
      "error",
      "WithStatement",
    ],
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
    "wrap-regex": "error",
  },
}
