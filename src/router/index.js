import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home')), 'home')
const dist = r => require.ensure([], () => r(require('@/page/404')), 'dist')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList')
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList')
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList')

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
        },
        {
          path: '/userList',
          component: userList,
          meta: ['数据管理', '用户列表']
        },
        {
          path: '/shopList',
          component: shopList,
          meta: ['数据管理', '商家列表']
        },
        {
          path: '/foodList',
          component: foodList,
          meta: ['数据管理', '食品列表']
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
