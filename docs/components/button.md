---
title: Button 按钮
---
# Button 按钮

<ClientOnly><button-demos></button-demos></ClientOnly>

::: details 点击查看源码
```vue
<g-button type="primary" >主要按钮</g-button>
<g-button type="success">成功按钮</g-button>
<g-button type="info">信息按钮</g-button>
<g-button type="warning">警告按钮</g-button>
<g-button type="danger">危险按钮</g-button>
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```
:::

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download| -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
| type      | 类型      |  String |none，primary，success，info，warning，danger| none
