/**
 * Basic Configuration.
 */
module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
  },
  "parserOptions": {
    "impliedStrict": true,
  },
  "rules": {
    "no-console": 1,
    "no-eval": 1,
    "no-template-curly-in-string": 0, // es6
    "no-empty-pattern": 0, // es6
    "no-implicit-globals": 0,
    "no-invalid-this": 0,
    "no-proto": 0,
    "no-script-url": 1,

    "no-restricted-syntax":[
      "error",
      "WithStatement",
    ],
  },
}
