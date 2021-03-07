import Toast from './toast.vue';

function createToast({
  Vue,
  message,
  propsData,
  onClose
}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData
  })
  toast.$slots.default = [message] //传了一个默认插槽的内容
  toast.$mount() // 用来挂载我们的扩展
  toast.$on('close', onClose)
  // console.log(toast.$el);
  document.body.appendChild(toast.$el)
  return toast
}
let currentToast
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose: () => {
          currentToast = null
        }
      })
    }
  }
}