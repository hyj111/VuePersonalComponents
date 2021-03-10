<template>
  <div style="padding-top: 16px">
    <p>
      <strong>预览</strong>
    </p>
    <div>
      <g-input error="用户名不低于两个字"></g-input>
      <g-input v-model="value" style="margin-left: 5px;"></g-input>
      <span>value: {{ value }}</span>
    </div>
    <div>
    
    </div>
  </div>
</template>
<script>
import GInput from "../../../src/input";
export default {
  components: { GInput },
  data() {
    return {
      value:'支持双向绑定'
    }
  },
};
</script>
