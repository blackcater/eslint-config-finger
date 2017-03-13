/**
 * normal configuration for javascript
 * 
 * 0: "off"
 * 1: "warn"
 * 2: "error"
 */
module.exports = {
  "extends": "eslint:recommended",
  "ecmaVersion": 6,
  "ecmaFeatures": {
    "experimentalObjectRestSpread": true,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "rules": {
    // common
    "no-console": 1,
    "no-alert": 1,
  },
}
