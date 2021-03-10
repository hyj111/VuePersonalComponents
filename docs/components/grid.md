---
title: Grid 栅格
---
# Grid 栅格

<grid-demo-1></grid-demo-1>

::: details 点击查看源码
```vue
<g-row class="demoRow">
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
</g-row>
```
:::


<grid-demo-2></grid-demo-2>

::: details 点击查看源码
```vue
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">col-6</div>
  </g-col>
</g-row>
```
:::
<grid-demo-3></grid-demo-3>

::: details 点击查看源码
```vue
* {
  box-sizing: border-box;
}

<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">col-8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">col-8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">col-6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">col-6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">col-4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">col-4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">col-2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">col-2</div>
  </g-col>
</g-row>
```
:::
# Attributes

### Row 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|gutter| 间距 | String、Number |--|0
|position|对齐方式|String|left、center、right|left

### Col
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|span| 栅格占据的列数 | String、Number |1-24|--
|offset|栅格左侧的间隔格数| String、Number|1-24|--
|ipad|ipad响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|narrowPc|窄屏幕响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|pc|普通电脑响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|widePc|宽屏响应式布局|Number、Object|span数字或{span:1;offset:1}|--