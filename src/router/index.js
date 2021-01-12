import Vue from 'vue'
import VueRouter from 'vue-router'
import EchartsLayout from '@/layout/echarts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/echarts/pie',
    name: 'home'
  },
  {
    path: '/echarts',
    name: 'layout',
    component: EchartsLayout,
    children: [
      {
        path: 'pie',
        name: 'pie',
        component: () => import('../views/pie/index.vue')
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/line/index.vue')
      },
      {
        path: 'guage',
        name: 'guage',
        component: () => import('@/views/guage/index.vue')
      },
      {
        path: 'radar',
        name: 'radar',
        component: () => import('@/views/radar/index.vue')
      },
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/bar/index.vue')
      },
      {
        path: 'gaode',
        name: 'gaode',
        component: () => import('@/views/gaode/index.vue')
      }
    ]
  },
  {
    path: '/gaode',
    name: 'layout',
    component: EchartsLayout,
    children: [
      {
        path: 'gaode',
        name: 'gaode',
        component: () => import('@/views/gaode/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
