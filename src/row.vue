<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluCol",
  props: {
    gutter: [Number, String],
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
      console.log(vm);
    });
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>