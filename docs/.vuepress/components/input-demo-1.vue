<template>
  <div class="container">
    <g-input></g-input>
    <g-input value="你好"></g-input>
    <g-input value="你好" disabled></g-input>
    <g-input value="你好" readonly></g-input>
  </div>
</template>
<script>
import GInput from "../../../src/input";
export default {
  components: { GInput },
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
