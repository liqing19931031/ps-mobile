/**
 * Created by arron_Li on 17/12/8. // 对Store的进一步整合 本store的开发思路是以模块为单位的组件式开发
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user' // 登录 退出登录
import routerTree from './modules/routerTree' // 关于路由的一些东西
import getters from './getters' // 获取公共store中的数据

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    routerTree
  },
  getters
})

export default store
