import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Introduction from './views/Introduction.vue'
import Learn from './views/Learn.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/1',
      name: '1',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/2',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/3',
      name: 'learn',
      component: Learn
    },
  ]
})
