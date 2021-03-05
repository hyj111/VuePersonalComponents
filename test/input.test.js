const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
	it('存在.', () => {
		expect(Input).to.be.ok
	})

	describe('inputPrors', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(()=>{
			vm.$destroy()
		})
		it('接收value', () => {
			 vm = new Constructor({
				propsData: {
					value: '1234'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.equal('1234')
		})

		it('接收disabled', () => {
			 vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.equal(true)
		})

		it('接收readOnly', () => {
			 vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.readOnly).to.equal(true)
		})

		it('接收error', () => {
			 vm = new Constructor({
				propsData: {
					error: 'error message'
				}
			}).$mount()
			const useElement = vm.$el.querySelector('use')
			expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
			const errorMessage = vm.$el.querySelector('.errorMessage')
			expect(errorMessage.innerText).to.equal('error message')
		})
	})
	describe('input事件', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(()=>{
			vm.$destroy()
		})
		it('支持change,input,focus,blur事件',()=>{
			['change','input','focus','blur'].forEach((eventName)=>{
				vm = new Constructor({
				}).$mount()
				const callback = sinon.fake()
				vm.$on(eventName,callback)
				// 触发input的change事件
				let event = new Event(eventName)
				const inputElement = vm.$el.querySelector('input')
				inputElement.dispatchEvent(event)
				// 希望触发chuange事件，且第一个回调函数是event
				expect(callback).to.have.been.calledWith(event)
			})
		})
		// it('支持input事件',()=>{
		// 	vm = new Constructor({
		// 	}).$mount()
		// 	const callback = sinon.fake()
		// 	vm.$on('input',callback)
		// 	// 触发input的input事件
		// 	let event = new Event('input')
		// 	const inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	// 希望触发input事件，且第一个回调函数是event
		// 	expect(callback).to.have.been.calledWith(event)
		// })
		// it('支持blur事件',()=>{
		// 	vm = new Constructor({
		// 	}).$mount()
		// 	const callback = sinon.fake()
		// 	vm.$on('blur',callback)
		// 	// 触发input的input事件
		// 	let event = new Event('blur')
		// 	const inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	// 希望触发blur事件，且第一个回调函数是event
		// 	expect(callback).to.have.been.calledWith(event)
		// })
		// it('支持focus事件',()=>{
		// 	vm = new Constructor({
		// 	}).$mount()
		// 	const callback = sinon.fake()
		// 	vm.$on('focus',callback)
		// 	// 触发input的focus事件
		// 	let event = new Event('focus')
		// 	const inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	// 希望触发blur事件，且第一个回调函数是event
		// 	expect(callback).to.have.been.calledWith(event)
		// })
	})

})