import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout' // 主容器组件
const _import = require('./_import_' + process.env.NODE_ENV + '.js') // 加载路由方法（这样就不需要申明了）

Vue.use(Router)

export const constantRouterMap = [ // 公共路由
  {path: '', redirect: 'login'},
  {path: '/login', component: _import('login/login')},
  {path: '/sign', component: _import('sign/sign')},
  {path: '',
    component: Layout,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/dashboard'),
      name: 'dashboard',
      icon: 'dashboard',
      title: '首页'
    }]
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
