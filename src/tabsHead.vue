<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions" ></slot>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',(item,vm)=>{
      let {width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${vm.$el.offsetLeft}px`
    })
  }
};
</script>
<style lang="scss" scoped>
$tab-height:40px;
$border-color:#ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  border-bottom: 1px solid $border-color;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid #1890ff;
    transition: all 250ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
}
</style>