import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import Team from './views/Team.vue'
import Projects from './views/Projects.vue'
import MyHome from './views/MyHome.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/my-home',
      name: 'my-home',
      component: MyHome
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },{
      path: '/team',
      name: 'team',
      component: Team
    },{
      path: '/projects',
      name: 'projects',
      component: Projects
    },
  ]
})
