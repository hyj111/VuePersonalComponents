<template>
  <div class="wrapper" :class="`${toastClass}`">
    <div ref="toast" class="toast">
      <div class="message">
        <div v-html="$slots.default[0]" v-if="enableHtml"></div>
        <slot v-else></slot>
      </div>
      <div class="line" ref="line"></div>
      <span v-if="closeButton" class="close" @click="onClickClose">{{
        closeButton.text
      }}</span>
    </div>
  </div>
</template>
<script>
// 在这定义了一个toast，我可以在任何一实例里调用这个方法,但是该代码侵入性太强，万一用户用的不是vue或者toast被使用了这叫做工程问题，可使用插件的方法解决
// import Vue from 'vue'
// Vue.prototype.$toast = function(){
//   console.log("我是toast");
// }
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: [Boolean,Number],
      default: 5,
      validator(value) {
       return value === false || typeof value === 'number' 
      }
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].includes(value);
      },
    },
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoClose * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },
  mounted() {
    this.execAutoClose();
    this.updateStyles();
  },
  computed: {
    toastClass() {
      return `position-${this.position}`;
    },
  },
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 1s;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
    .toast {
      animation: fade-in 1s;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 1s;
    }
  }
}
.toast {
  font-size: $font-size;
  color: white;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>