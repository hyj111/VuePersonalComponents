<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name:'GuluTabs',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    selected: {
      type: String,
      require:true
    },
    // horizontal 横向 vertical纵向
    direction:{
      type: String,
      default:'horizontal',
      validator (value) {
        return ['horizontal','vertical'].includes(value)
      }
    }
  },
  mounted(){
    this.$children.forEach(vm=>{
      if(vm.$options.name === 'GuluTabsHead'){
        vm.$children.forEach(item=>{
          if(item.$options.name === 'GuluTabsItem' && item.name === this.selected) {
            console.log(item.$el);
            this.eventBus.$emit('update:selected',this.selected,item)
          }
        })
      }
    })
    
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  }
}
</script>
<style lang="scss" scoped>

</style>