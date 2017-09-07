// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入babel-polyfill 解决低版本安卓系统不支持 promise
import 'babel-polyfill'

import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

// 引入路由配置
import router from './router'
// 引入vuex
import store from './store'

FastClick.attach(document.body)
// 引入弹窗组件
import { ConfirmPlugin, ToastPlugin, AlertPlugin } from 'vux'
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

import mixins from './mixins'
// 注册全局mixins
Vue.mixin(mixins)

import filters from './filters'
// 实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.config.productionTip = false

// 将请求服务api添加至全局变量
import base from './api/base'
Vue.prototype.base = base
/* eslint-disable no-new */
// -------------------------全局自定义滚动函数---------------
Vue.directive('scrollMonitor', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el, func) {
    // 聚焦元素
    el.addEventListener('scroll', (e) => {
      let delay = 10
      let wh = e.target.clientHeight
      let scrollTop = e.target.scrollTop
      let bodyHeight = e.target.scrollHeight
      if (scrollTop + wh + delay > bodyHeight) {
        func.value()
      }
    }, true)
  }
})
// ----------------------------全局自定义滚动函数-----------------------
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
