module.exports = {
  "rules": {
    // ---- Variables ----
    "init-declarations": "off",
    "no-catch-shadow": "error",
    "no-delete-var": "off",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "off",
    "no-undefined": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "after-used",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
      },
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": false,
        "variables": true,
      },
    ],
  },
}
