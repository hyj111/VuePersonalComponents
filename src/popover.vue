<template>
  <div class="popover" @click.stop="xxx">
    <div
      ref="contentWrapper"
      v-if="visible"
      class="content-wrapper"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    console.log(this.$refs.triggerWrapper);
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.contentWrapper);
          let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
          this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
          this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
          let eventHandler = () => {
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  color: rgba(0, 0, 0, 0.85);
  transform: translateY(-100%);
}
</style>