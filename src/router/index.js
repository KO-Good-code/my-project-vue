import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Blog from '@/components/blog'
import home from '@/components/home'
import dist from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: '/login',
        name: 'login',
        component: login
      }]
    },
    {
      path: '*',
      name: '404',
      component: dist
    }
  ]
})
