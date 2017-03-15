/**
 * Configuration for react and es6
 */
module.exports = {
  "extends": [
    "./index",
    "./lib/plugins/react",
    "./lib/plugins/jsx",
  ].map(require.resolve),
}
