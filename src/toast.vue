<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>

// 在这定义了一个toast，我可以在任何一实例里调用这个方法,但是该代码侵入性太强，万一用户用的不是vue或者toast被使用了这叫做工程问题，可使用插件的方法解决
// import Vue from 'vue'
// Vue.prototype.$toast = function(){
//   console.log("我是toast");
// }
export default {
  name:"GuluToast"
}
</script>
<style lang="scss" scoped>
$font-size:14px;
$toast-height:40px;
.toast {
  font-size: $font-size;
  color: white;
  line-height: 1.8;
  height: $toast-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(0,0,0,0.74);
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
  padding: 0 16px;
}
</style>