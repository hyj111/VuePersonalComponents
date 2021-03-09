<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  inject:['eventBus'],
  data() {
    return {
      open:false,
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected',names=>{
      if(names.includes(this.name)) {
        this.open = true
      }else {
          this.open = false
      }
    })
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    name:{
      type:String,
      required:true
    }
  },
  methods: {
    toggle(){
      if(this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      }else {
        this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
      }     
    },
  },
};
</script>
<style lang="scss" scoped>
$grey:#ddd;
$border-radius:4px;
.collapseItem {
  > .title {
  border: 1px solid $grey;
  // border-radius:$border-radius;
  margin:-1px -1px 0 -1px;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
   &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  >.content {
    padding: 0 8px;
  }
}
</style>