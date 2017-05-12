import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/login',
    	name: 'login',
    	component: login
    }
  ]
})
