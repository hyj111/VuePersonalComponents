# 一个Vue UI 组件
[![Build Status](https://travis-ci.org/hyj111/VuePersonalComponents.svg?branch=main)](https://travis-ci.org/hyj111/VuePersonalComponents)

## 介绍
这是一个Vue的UI框架
## 开始使用

1. 添加css样式

使用本框架前，请在CSS中开启border-box

```
*{box-sizing: border-box}
*::before{box-sizing: border-box}
*::after{box-sizing: border-box}
```
IE8 及以上浏览器都支持此样式

2. 安装VuePersonalComponents
```
npm i --save VuePersonalComponents
```

3. 引入VuePersonalComponents
```
import 'vuepersonalcomponents/dist/index.css'
import {Button,ButtonGroup,Icon} from 'vuepersonalcomponents';
export default {
  name: 'App',
  components: {
    'g-button':Button,
    'g-icon':Icon
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码