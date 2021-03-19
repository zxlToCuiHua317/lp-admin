
import request from '@/utils/request'
import qs from 'qs'

export function gameCodeLists() {
  return request({
    url: 'api/gmDateReport/gameCodeList',
    method: 'get'
  })
}
export function gameCodeList() {
  return request({
    url: 'api/gmDateReport/reportList',
    method: 'get'
  })
}
export function download(params) {
  return request({
    url: '/api/gmDateReport/download' + '?' + qs.stringify(params, { indices: false }),
    method: 'get'
  })
}

export default { gameCodeList, download }
