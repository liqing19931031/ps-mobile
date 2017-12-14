/**
 * Created by arron_Li on 17/12/8. // 用户关联接口
 */
import { login, logout, getUserInfo } from '@/api/login'

const user = {
  state: {
    user: '',
    status: '',
    avatar: '',
    login: '' // 这个字段暂时用来表示已登录 后期需替换成token
  },

  mutations: { // 静态数据修改 mutations
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_LOGIN: (state, login) => { // 设置登录信息的 -> 需要修正为token
      state.login = login
    },
    SET_AVATAR: (state, avatar) => { // 设置头像的mutations
      state.avatar = avatar
    }
  },

  actions: { // 异步操作actions
    Login({ commit }, userMessage) { // 登录
      return new Promise((resolve, reject) => {
        login(userMessage.username, userMessage.password)
        .then(response => {
          const data = response.data
          resolve() // 执行回调
        }).catch(error => { // 失败分支
          reject(error)
        })
      })
    },

    GetUserInfo({ commit, state}) { // 获取用户的个人信息
      return new Promise((resolve, reject) => {
        getUserInfo(state.login)
        .then(response => {
          const data = response.data
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_USER', data.user)
        })
      })
    },

    LogOut({ commit, state}) { // 登出
      return new Promise((resolve, reject) => {
        logout(state.login)
        .then(() => {
          commit('SET_LOGIN', '')
          resolve()
        })
      })
    }
  }
}

export default user
