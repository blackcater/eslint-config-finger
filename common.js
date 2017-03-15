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

  "parseOptions": { "ecmaFeatures": { impliedStrict: true } },

  "ecmaFeatures": { impliedStrict: true },

  "env": { browser: true },

  "rules": {},
}
