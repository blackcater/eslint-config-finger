# eslint-config-finger

[**Finger**](http://finger66.com/static/laptap/join.html)内部使用的，用于检测JavaScript代码

<span><img src="http://forthebadge.com/images/badges/built-with-love.svg"></span>
<span><img src="http://forthebadge.com/images/badges/makes-people-smile.svg"></span>
<span><img src="http://forthebadge.com/images/badges/uses-badges.svg"></span>

English Doc. : [en](https://github.com/blackcater/eslint-config-finger/blob/master/README_EN.md)

## 安装

```shell
# npm
npm install eslint eslint-config-finger --save-dev

## OR

#yarn
yarn add eslint eslint-config-finger --dev

```

## 基本使用

### ES6

如果你使用了es6(es2015)，es7的语法，没有使用任何框架([react](https://github.com/facebook/react), [vue](https://github.com/vuejs/vue)或[angular2](https://github.com/angular/angular/))

你只需要在你的`eslint`配置文件中：

```json
// .eslintrc
{
  "extends": "finger"
}
```

### React

如果你使用了`react`框架。

你只需要在你的`eslint`配置文件中：

```json
// .eslintrc
{
  "extends": "finger/react"
}
```

### Vue

如果你使用了`vue`框架。

你只需要在你的`eslint`配置文件中：

```json
// .eslintrc
{
  "extends": "finger/vue"
}
```

### 通用

如果你就是一般的代码。

你只需要在你的`eslint`配置文件中：

```json
// .eslintrc
{
  "extends": "finger/common"
}
```

## 高级使用

### 规则覆盖

如果你对项目中的一些配置不满意，可以任意修改：

```json
// .eslintrc
{
  "extends": "finger",
  "rules": {

  }
}
```

### 特定环境

例如，你在项目中使用了[mocha](https://mochajs.org/)，当你写如下代码的时候：

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

这时候，你需要对`eslint`配置文件进行修改：

```json
{
  "extends": "finger",
  "env": ["mocha"]
}
```

这只是一个很常见的例子，`eslint`还有许多的环境参数，比如：`jasmine`, `jest`, `commonjs`, `prototypejs`等等。

具体请参见[Specifying Environments](http://eslint.org/docs/user-guide/configuring#specifying-environments)

## 最佳实践

在整个配置的设置上，我们并没有对代码的`缩进大小`，`缩进样式`和`文件末尾是否加一空行`进行设置。

这些，我觉得并不属于`eslint`的范畴，请使用[EditorConfig](http://editorconfig.org/)进行配置。

## 常见问题

*预待发现...*
