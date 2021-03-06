<template>
  <div class="row" :style="{marginLeft: -gutter/2+'px',marginRight: -gutter/2+'px'}">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluCol',
  props:{
    gutter:[Number,String],
  },
  mounted(){
    console.log(this.$children);
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
      console.log(vm);
    })
  }
}
</script>
<style lang="scss" scoped>
  .row {
    display: flex;
    margin: 0 -10px;
  }
</style>