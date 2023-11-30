import request from '@/api/guangou'

// 获取所有下拉菜单type
export const getType = () => {
  return request({
    url: '/selects/types',
    method: 'get',
  })
}

// 根据type获取下拉列表数据
export const getTypeOption = (type) => {
  return request({
    url: '/selects',
    method: 'get',
    params: {type:type}
  })
}
