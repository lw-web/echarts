import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.scss'
const echarts = require('echarts')

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
