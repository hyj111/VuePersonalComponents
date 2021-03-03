import Vue from 'vue';
import Button from './button.vue'
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            loading1:false
        }
    },
  })
//   单元测试
// import chai from 'chai'
// import spies from 'chai-spies';
// chai.use(spies)
// // const expect = chai.expect
// const expect = chai.expect
// {
//     //测试按钮含有icon
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon:'settings'
//         }
//     })
//     button.$mount('')
//     let useElement = button.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
// }
// {   
//     // 测试loading
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon:'settings',
//             loading:true
//         }
//     })
//     button.$mount('')
//     let useElement = button.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon:'settings',
//             iconPosition:'left'
//         }
//     })
//     button.$mount(div)
//     let svg = button.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('0')
//     button.$el.remove()
//     button.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData: {
//             icon:'settings',
//             iconPosition:'right'
//         }
//     })
//     button.$mount(div)
//     let svg = button.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     button.$el.remove()
//     button.$destroy()
// }
// {   
//     // 使用chai.spy监听回调函数
//     const Constructor = Vue.extend(Button)
//     const gButton = new Constructor({
//         propsData: {
//             icon:'settings',
//         }
//     })
//     gButton.$mount()
//     let spy = chai.spy(function(){})
//     gButton.$on('click',spy)
//     let button = gButton.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }