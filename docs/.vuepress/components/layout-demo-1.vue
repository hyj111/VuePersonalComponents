<template>
  <div class="container">
    <div class="wrapper">
      <g-layout class="layout">
        <g-header class="header"> header </g-header>
        <g-content class="content"> content </g-content>
        <g-footer class="footer"> footer </g-footer>
      </g-layout>
    </div>
    <br />
    <div class="wrapper">
      <g-layout class="layout">
        <g-header class="header">header</g-header>
        <g-layout>
          <g-sider class="sider"> sider</g-sider>
          <g-content class="content">content</g-content>
        </g-layout>
        <g-footer class="footer">footer</g-footer>
      </g-layout>
    </div>
    <br />
    <div class="wrapper">
      <g-layout class="layout">
        <g-sider class="sider">sider</g-sider>
        <g-layout>
          <g-header class="header">header</g-header>
          <g-content class="content">content</g-content>
          <g-footer class="footer">footer</g-footer>
        </g-layout>
      </g-layout>
    </div>
    <br />
    <div class="wrapper">
      <g-layout class="layout">
        <g-layout>
          <g-header class="header">header</g-header>
          <g-content class="content">content</g-content>
          <g-footer class="footer">footer</g-footer>
        </g-layout>
        <g-sider class="sider">sider</g-sider>
      </g-layout>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GLayout from "../../../src/layout";
import GHeader from "../../../src/header";
import GFooter from "../../../src/footer";
import GContent from "../../../src/content";
import GSider from "../../../src/sider";
export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider },
};
</script>
<style lang="scss" scoped>
  .container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
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