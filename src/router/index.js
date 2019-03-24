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
const olderList = r => require.ensure([], () => r(require('@/page/olderList')), 'olderList')
const rootList = r => require.ensure([], () => r(require('@/page/rootList')), 'rootList')
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop')
const addFood = r => require.ensure([], () => r(require('@/page/addFood')), 'addFood')
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor')
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet')
const explian = r => require.ensure([], () => r(require('@/page/explian')), 'explian')

export default new Router({
  routes: [
    {
      path: '',
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
        },
        {
          path: '/olderList',
          component: olderList,
          meta: ['数据管理', '订单列表']
        },
        {
          path: '/rootList',
          component: rootList,
          meta: ['数据管理', '管理员列表']
        },
        {
          path: '/addShop',
          component: addShop,
          meta: ['添加数据', '添加商铺']
        },
        {
          path: '/addFoods',
          component: addFood,
          meta: ['添加数据', '添加商品']
        },
        {
          path: '/visitor',
          component: visitor,
          meta: ['图表', '用户分布']
        },
        {
          path: '/adminSet',
          component: adminSet,
          meta: ['设置', '管理员设置']
        },
        {
          path: '/explian',
          component: explian,
          meta: ['说明']
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
