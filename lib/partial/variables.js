module.exports = {
  "rules": {
    // ---- Variables ----
    // "init-declarations": [
    //   "warn",
    //   "always",
    // ],
    "no-catch-shadow": "error",
    "no-delete-var": "off",
    // "no-label-var": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    // "no-undef-init": "error",
    "no-undefined": "error",
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": false,
        "variables": true,
      },
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "all",
        "caughtErrors": "none",
        "ignoreRestSiblings": true,
      },
    ],
  },
}
