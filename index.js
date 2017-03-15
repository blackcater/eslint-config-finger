/**
 * Normal configuration for javascript
 *
 * You can use it in any projects written with ES6 sytex
 */
module.exports = {
  "extends": [
    "./common",
    "./lib/partial/node",
    "./lib/partial/es6",
    "./lib/plugins/import",
  ].map(require.resolve),
  "env": {},
  "parserOptions": {},
  "rules": {},
}
