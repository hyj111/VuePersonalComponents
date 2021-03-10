---
title: Layout布局
---
# Layout

<layout-demo-1></layout-demo-1>

::: details 点击查看源码
```vue
<g-layout class="layout">
  <g-header class="header">header</g-header>
  <g-content class="content">content</g-content>
  <g-footer class="footer">footer</g-footer>
</g-layout>

<g-layout class="layout">
  <g-header class="header">header</g-header>
  <g-layout>
    <g-sider class="sider"> sider</g-sider>
    <g-content class="content">content</g-content>
  </g-layout>
  <g-footer class="footer">footer</g-footer>
</g-layout>

<g-layout class="layout">
  <g-sider class="sider">sider</g-sider>
  <g-layout>
    <g-header class="header">header</g-header>
    <g-content class="content">content</g-content>
    <g-footer class="footer">footer</g-footer>
  </g-layout>
</g-layout>

<g-layout class="layout">
  <g-layout>
    <g-header class="header">header</g-header>
    <g-content class="content">content</g-content>
    <g-footer class="footer">footer</g-footer>
  </g-layout>
  <g-sider class="sider">sider</g-sider>
</g-layout>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.layout {
  color: white;
}
.sider {
  background-color: #3ba0e9;
  // height: 100px;
  width: 100px;
}
.content {
  height: 100px;
  background-color: #108ee9;
}
.header {
  height: 50px;
  background-color: #7dbcea;
}
.footer {
  height: 50px;
  background-color: #7dbcea;
}
</style>

```
:::