---
title: Toast
---
# Toast

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