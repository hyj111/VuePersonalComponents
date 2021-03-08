<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed:{
    classes(){
      return {
        active:this.active
      }
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true,
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      // console.log(name);
      this.active = name === this.name;
    });
  },
};
</script>
<style lang="scss" scoped>
.tabs-pane {
    &.active {
    background: red;
  }
}
</style>