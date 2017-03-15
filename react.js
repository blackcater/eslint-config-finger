/**
 * If you use react
 */
module.exports = {
  "extends": [
    "./index",
    "./lib/plugins/react",
    "./lib/plugins/jsx",
  ].map(require.resolve),
}
