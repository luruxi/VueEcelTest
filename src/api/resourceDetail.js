import request from '@/utils/request'

export function getResourceDetail(data) {
  return request({
    url: '/productgateway/get',
    method: 'get',
    params: data
  })
}
