---
title: Input 输入框
---
# Input 输入框

使用方法
<ClientOnly><input-demo-1></input-demo-1></ClientOnly>

::: details 点击查看源码
```vue
<g-input></g-input>
<g-input value="你好"></g-input>
<g-input value="你好" disabled></g-input>
<g-input value="你好" readonly></g-input>
```
:::

<ClientOnly><input-demo-2></input-demo-2></ClientOnly>
::: details 点击查看源码
```vue
<g-input error="用户名不低于两个字"></g-input>
<g-input v-model="value"></g-input>
```
:::

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|value| 设置默认内容 | String |--|-- 
|disabled| 是否禁用状态 | Boolean |true, false|false
|readonly| 是否只读状态 | Boolean |true, false|false
|error| 错误信息 | String |--|-- 

