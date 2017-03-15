# eslint-config-finger

It is used by [**Finger**](http://finger66.com/static/laptap/join.html)，for checking javascript code.

<span><img src="http://forthebadge.com/images/badges/built-with-love.svg"></span>
<span><img src="http://forthebadge.com/images/badges/makes-people-smile.svg"></span>
<span><img src="http://forthebadge.com/images/badges/uses-badges.svg"></span>

中文文档: [zh](https://github.com/blackcater/eslint-config-finger/blob/master/README.md)

## Install

```shell
# npm
npm install eslint eslint-config-finger --save-dev

## OR

#yarn
yarn add eslint eslint-config-finger --dev

```

## Basic Usage

### ES6

If you are using es6(es5) syntax without any front-end framework, such as [react](https://github.com/facebook/react), [vue](https://github.com/vuejs/vue), [angular2](https://github.com/angular/angular/) and so on.

You only need to modify your own `eslint` configuration file：

```json
// .eslintrc
{
  "extends": "finger"
}
```

### React

If you are using react framework.

You only need to modify your own `eslint` configuration file：

```json
// .eslintrc
{
  "extends": "finger/react"
}
```

### Vue

If you are using vue framework.

You only need to modify your own `eslint` configuration file：

```json
// .eslintrc
{
  "extends": "finger/vue"
}
```

### Common

If your code is es5 syntax.

You only need to modify your own `eslint` configuration file：

```json
// .eslintrc
{
  "extends": "finger/common"
}
```

## Advanced Usage

### Rules Override

If you are angry about some rules, you can override it simply.

```json
// .eslintrc
{
  "extends": "finger",
  "rules": {
    // your own rules configuration
  }
}
```

### Environments Override

For example，you are using [mocha](https://mochajs.org/) in your project.

When you write following code:

```javascript
describe("OwnClass", () => {
  describe("#ownFunc", () => {
    it('should return a boolean value', () => {
      // some code
    })
  })
})
// error : You can not use `describe` before undefined.
// error : You can not use `it` before undefined.
```

You will see two errors.

At this time, you only need to modify your own `eslint` configuration file：

```json
{
  "extends": "finger",
  "env": ["mocha"]
}
```

This is a common example.

`eslint` also support others environment values，such as `jasmine`, `jest`, `commonjs`, `prototypejs` and so on.

Specific reference: [Specifying Environments](http://eslint.org/docs/user-guide/configuring#specifying-environments)

## Best Practices

We don't have any configuration about `indent size`，`indent style` or `newline for eof`.

We think these are not responsible for `eslint`，please use [EditorConfig](http://editorconfig.org/) instead.

## FAQ

*TO BE CONTINUE...*
