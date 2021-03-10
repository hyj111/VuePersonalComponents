---
title: Toast 文字提示
---
# Toast 文字提示

<toast-demo-1></toast-demo-1>

::: details 点击查看源码
```vue
<g-button>默认按钮</g-button>
<g-button icon="settings">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```
:::

<toast-demo-2></toast-demo-2>
::: details 点击查看源码
```vue
<g-button @click="onClickButton">上方弹出</g-button>


<style scoped>
* {
  box-sizing: border-box;
}
</style>


<script>
import plugin from '../../../src/plugin'
import GButton from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: {GButton},
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">可传入html元素</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>
```
:::
# options
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| message | 显示内容，函数第一个参数 |    String | --| --
| object | 函数接受的第二个参数 |    String | autoClose, closeButton, enableHtml, position| --
| position | 设置位置 |    String | top、middle、bottom| middle
|autoClose|是否自动关闭|Boolean|true、false|true
| closeButton | 设置关闭按钮      |  Object |--| {message:'关闭', callback:undefined}
|enableHtml|是否支持html内容|Boolean|true、false|false