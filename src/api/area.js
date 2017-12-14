/**
 * Created by arron_Li on 17/12/11. // 省市区接口
 */

import request from '@/utils/request'

export function getarea (query) {
  return request({
    url: '/area/area',
    method: 'get',
    data: {
      pid: query
    }
  })
}
