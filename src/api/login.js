/**
 * Created by arron_Li on 17/12/8. // 登录接口
 */
import request from '@/utils/request'

export function login (username, password) { // 登录接口
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout () { // 登出接口
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo (token) { // 获取用户信息接口-> 需要确保用户登录的token值
  return request({
    url: '/login/getUserInfo',
    method: 'get',
    params: { token }
  })
}
