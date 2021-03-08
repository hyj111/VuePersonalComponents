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
    if(this.$children.length ===0) {
      console.warn('tabs子组件应该是tabs-head和tabs-nav,但你没有写子组件')
    }
    this.$children.forEach(vm=>{
      if(vm.$options.name === 'GuluTabsHead'){
        vm.$children.forEach(item=>{
          if(item.$options.name === 'GuluTabsItem' && item.name === this.selected) {
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