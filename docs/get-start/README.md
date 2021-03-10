---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i vuepersonalcomponents -S
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 vuepersonalcomponents

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入以后会进行进一步优化。

```js
import {Button, ButtonGroup, Icon} from 'vuepersonalcomponents'
import 'vuepersonalcomponents/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Toast,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover

} from 'vuepersonalcomponents'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.use(plugin)                           // toast 组件的使用方法
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
```