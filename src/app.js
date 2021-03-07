import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue';
import Plugin from './plugin';

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      message:'ssss'
    }
  },
  created(){
    
  },
  methods:{
    showToast(){
      this.$toast('撒丢掉发生副食店解放但是开发建设在这定义了一个toast，我可以在任何一实例里调用这个方法,但是该代码侵入性太强，万一用户用的不是vue或者toast被使用了这叫做工程问题，可使用插件的方法解决在这定义了一个toast，我可以在任何一实例里调用这个方法,但是该代码侵入性太强，万一用户用的不是vue或者toast被使用了这叫做工程问题，可使用插件的方法解决的口感就放假啊随风哈苏腐坏受到攻击',{
        enableHtml:true,
        position:'bottom'
    })
    }
  }
})