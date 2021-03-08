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
import Tabs from './tabs.vue'
import TabsBody from './tabsBody.vue'
import TabsHead from './tabsHead.vue'
import TabsItem from './tabsItem.vue'
import TabsPane from './tabsPane.vue'

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
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.use(Plugin)

new Vue({
  el: '#app',
  data() {
    return {
      selectedTab:'sports'
    }
  },
  created(){
    
  },
  methods:{
    showToast1(){
      this.$toast(`${Math.random()*200}但是该代码侵入性`,{
        autoCloseDelay:1,
        position:'top'
    })
    },
    showToast2(){
      this.$toast(`${Math.random()*200}但是该代码侵入性`,{
        position:'middle',
        closeButton:{
          text:'444',
          callback:()=>{
            console.log(555);
          }
        }
    })
    },
    showToast3(){
      this.$toast(`${Math.random()*200}但是该代码侵入性`,{
        position:'bottom'
    })
    }
  }
})