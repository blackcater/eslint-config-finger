/**
 * Basic Configuration, you can use it in any project
 */
module.exports = {
  "extends": [
    "./lib/partial/errors",
    "./lib/partial/best-practices",
    "./lib/partial/variables",
    "./lib/partial/stylistic",
  ].map(require.resolve),

  "env": { browser: true },

  "rules": {},
}
