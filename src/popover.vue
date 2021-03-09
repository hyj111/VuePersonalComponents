<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" v-if="visible" class="content-wrapper">
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
     positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
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