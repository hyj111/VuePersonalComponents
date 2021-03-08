<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsItem',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      required: true,
    },
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name,this);
    },
  },
  mounted() {
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  },
};
</script>
<style lang="scss" scoped>
.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: #1890ff;
  }
}
</style>