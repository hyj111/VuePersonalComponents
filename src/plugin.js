import Toast from './toast.vue';
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast)
      let toast = new Constructor()
      toast.$slots.default = [message] //传了一个默认插槽的内容
      toast.$mount() // 用来挂载我们的扩展
      // console.log(toast.$el);
      document.body.appendChild(toast.$el)
    }
  }
}