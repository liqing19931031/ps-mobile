/**
 * Created by arron_Li on 17/12/8. // 路由树定义于全局 （在这个里可以设置动态返回路由树定制属于用户定制权限的路由）
 */
import { constantRouterMap } from '@/router'

const routerTree = {
  state: {
    routers: constantRouterMap,
    sidebar: {
      opened: true
    }
  },

  mutations: { // 静态数据修改 mutations
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
    }
  },

  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}

export default routerTree
