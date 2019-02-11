import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Blog from '@/components/blog'
import home from '@/components/home'
import dist from '@/components/404'
import resume from '@/components/resume'
import manage from '@/components/manage'
import work from '@/components/work'
import project from '@/components/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'resume',
          component: resume,
          children: [
            {
              path: '/manage',
              name: 'manage',
              component: manage
            },
            {
              path: '/work',
              name: 'work',
              component: work
            },
            {
              path: '/project',
              name: 'project',
              component: project
            }
          ]
        },
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/blog',
          name: 'blog',
          component: Blog
        },
        {
          path: '/resume',
          name: 'resume',
          component: resume
        }]
    },
    {
      path: '*',
      name: '404',
      component: dist
    }
  ]
})
