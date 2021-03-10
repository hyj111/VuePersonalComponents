<template>
  <div style="padding-top: 16px">
    <p>
      <strong>预览</strong>
    </p>
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