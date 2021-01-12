import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/index.scss'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 水球图表插件版本较低 4.8.0 引用时需注意是否和当前项目Ecahrts版本一致
import 'echarts-liquidfill'

const echarts = require('echarts')
Vue.prototype.$echarts = echarts
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
