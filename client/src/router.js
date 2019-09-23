import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Pending from './components/Pending.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/pg123',
      name: 'pending',
      component: Pending
    },

    { 
    path: '/error', 
    name:'NotFound',
    component: NotFound,
    },

  { path: '*', redirect: '/error' },  
  ]
})
