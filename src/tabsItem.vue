<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
        active:this.active,
        disabled:this.disabled
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
    onClick() {
      if(this.disabled) {return}
      this.eventBus.$emit("update:selected", this.name,this);
      this.$emit('click',this)
    },
  },
  mounted() {
    this.eventBus && this.eventBus.$on("update:selected", (name) => {
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
  &.disabled {
    color: rgba(0,0,0,.25);
    cursor: not-allowed;
  }
}
</style>