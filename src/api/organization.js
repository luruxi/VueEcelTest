import request from '@/utils/request'

export function applyForShop(data) {
  return request({
    url: '/shopgateway/save',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

export function getShopInfo(data) {
  return request({
    url: '/shopgateway/getShopInfo',
    method: 'get',
    data
  })
}
