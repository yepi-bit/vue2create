import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/rightAnimation',
    name: 'rightAnimation',
    component: () => import(/* webpackChunkName: "about" */ '../views/rightAnimation.vue')
  },
  {
    path: '/openData',
    name: 'openData',
    component: () => import('../views/openData.vue')
  },
  {
    path: '/openData2',
    name: 'openData2',
    component: () => import('../views/openData2.vue')
  },
  {
    path: '/openData3',
    name: 'openData3',
    component: () => import('../views/openData3.vue')
  },
  {
    path: '/leftRight2',
    name: 'leftRight2',
    component: () => import('../views/leftRight2.vue')
  },
  {
    path: '/leftRight',
    name: 'leftRight',
    component: () => import('../views/leftRight.vue')
  },
  {
    path: '/hoverData',
    name: 'hoverData',
    component: () => import('../views/hoverData.vue')
  },
  {
    path: '/selectData',
    name: 'selectData',
    component: () => import('../views/selectData.vue')
  },
  {
    path: '/buyCount',
    name: 'buyCount',
    component: () => import('../views/buyCount.vue')
  },
  {
    path: '/optionValue',
    name: 'optionValue',
    component: () => import('../views/optionValue.vue')
  },
  {
    path: '/uploadImg',
    name: 'uploadImg',
    component: () => import('../views/uploadImg.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
