import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('caro-button',Button)
Vue.component('caro-icon',Icon)
Vue.component('caro-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading:false
    },
    methods:{

    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
const should = chai.should

//第一个测试用例：测试svg属性
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            svg:'settings'
        }
    }).$mount()

    var useEle = vm.$el.querySelector('use')
    var useEleAttr = useEle.getAttribute('xlink:href')
    expect(useEleAttr).to.equal('#i-settings')
    vm.$el.remove()
    vm.$destroy()
    console.log('测试完毕1')
}
//第二个测试用例：测试loading属性
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            svg:'settings',
            loading:true
        }
    }).$mount()

    var useEle = vm.$el.querySelector('use')
    var useEleAttr = useEle.getAttribute('xlink:href')
    expect(useEleAttr).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
    console.log('测试完毕2')
}
//第三个测试用例：测试iconPosition属性，即icon的顺序
{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            svg:'settings',
            iconPosition:'right'
        }
    }).$mount(div)

    var useEle = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(useEle)

    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
    console.log('测试完毕3')
}
//第四个测试用例：测试click事件
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            svg:'settings'
        }
    })
    vm.$mount()

    const spyFn = chai.spy(function () {
        console.log('this is spy content')
    })
    vm.$on('click',spyFn)

    // vm.$el.click()
    vm.$emit('click')
    vm.$el.remove()
    vm.$destroy()
    expect(spyFn).to.have.been.called()
    console.log('测试完毕4')
}