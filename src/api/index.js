import request from '@/utils/system/request'

// 登录api
// token	string	是	手机号
// pwd	string	是	密码
export function loginApi(data) {
  return request({
    url: '/login',
    method: 'post',
    baseURL: '',
    data
  })
}

// 获取菜单
export function getMenu(data) {
  return request({
    url: '/system/menu',
    method: 'get',
    baseURL: '',
    data
  })
}

// 角色管理 - 添加角色
// name	string	是	角色名称
// description	string	否	角色描述
// menuIds	List	否	角色关联的菜单编号列表
export function addRole(data) {
  return request({
    url: '/role/add',
    method: 'post',
    baseURL: '',
    data
  })
}
