<template>
  <transition name="slide">
    <div class="sider" v-if="visable">
      <slot></slot>
      <button @click="visable = flase">close</button>
    </div>
  </transition>
</template>
<script>
export default {
  name: "GuluSider",
  data() {
    return {
      visable: true,
    };
  },
  methods: {
    enter(){
      done()
    },
    leave(){
      done()
    }
  },
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
</style>