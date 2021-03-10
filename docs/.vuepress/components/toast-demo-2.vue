<template>
  <div style="padding-top: 16px">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;

}
</style>
<script>
import plugin from "../../../src/plugin";
import GButton from "../../../src/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { GButton },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">可传入html元素</strong>', {
        enableHtml: true,
      });
    },
  },
};
</script>