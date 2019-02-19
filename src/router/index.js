import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const dist = r => require.ensure([], () => r(require('@/page/404')), 'dist')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: '',
          name: 'home',
          component: home,
          meta: []
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: dist
    }
  ]
})
