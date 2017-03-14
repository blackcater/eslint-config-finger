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
    // es6
    "no-template-curly-in-string": 0,
    // es6
    "no-empty-pattern": 0,
    "no-implicit-globals": 0,
    "no-invalid-this": 0,
    "no-proto": 0,
    "no-script-url": 1,
    // ---- Node.js and CommonJS ----
    "callback-return": 2,
    "global-require:": 0,
    "handle-callback-err": 2,
    "no-mixed-requires": 2,
    "no-new-require": 2,
    "no-path-concat": 0,

    "no-restricted-syntax": [
      "error",
      "WithStatement",
    ],
  },
}
