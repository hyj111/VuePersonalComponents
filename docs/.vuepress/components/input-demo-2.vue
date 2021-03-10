<template>
  <div class="container">
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
<style scoped>
  .container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
