import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from '@/components/common/toast'

import './components/vant/vant.js'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/loading.gif')
})

// 添加事件总线
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
Vue.use(toast)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
