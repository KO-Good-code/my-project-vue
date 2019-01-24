import Vue from 'vue'
import Router from 'vue-router'
import resume from '@/components/resume'
import Blog from '@/components/blog'
import dist from '@/components/404'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume',
      component: resume,
      children:[
        {
          path:'Blog',
          name:'Blog',
          component:Blog
        }
      ]
    },
    {
      path:'*',
      name:'404',
      component:dist
    }
  ]
})
