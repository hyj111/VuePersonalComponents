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
    this.eventBus.$emit('update:selected',this.selected)
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