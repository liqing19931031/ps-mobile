/**
 * Created by arron_Li on 17/12/8. // 文章接口
 */

import request from '@/utils/request'

export function addarticle (query) { // 添加文章接口
  return request({
    url: '/article/add',
    method: 'post',
    data: query
  })
}

export function getarticleList (query) { // 文章列表获取
  return request({
    url: '/article/list',
    method: 'get',
    data: query
  })
}

export function getarticle (query) { // 单个文章信息获取
  return request({
    url: '/article/detail',
    method: 'get',
    data: query
  })
}
