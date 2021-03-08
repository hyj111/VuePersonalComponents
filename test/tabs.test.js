const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsBody from '../src/tabsBody.vue'
import TabsHead from '../src/tabsHead.vue'
import TabsItem from '../src/tabsItem.vue'
import TabsPane from '../src/tabsPane.vue'
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  // this.Timeout(5000)
	it('存在.', () => {
		expect(Tabs).to.be.ok
	})
  it('接受 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs selected="finance">
        <g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance"> 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
          <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
          <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })



})