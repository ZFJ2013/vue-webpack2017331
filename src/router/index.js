import Vue from 'vue'
import Router from 'vue-router'
import hello from '../components/Hello'
import App from '../App'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')

export default new Router({
  routes: [
    {
      path: '/',
      component: App, // 顶层路由，对应index.html
      children: [ // 二级路由。对应App.vue
        {
          path: '',
          name: 'Hello',
          component: hello
        },
        {
          path: '/login',
          name: 'login',
          component: login
        }
      ]
    }
  ]
})
