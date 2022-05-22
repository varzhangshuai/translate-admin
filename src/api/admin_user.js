import { request } from '@/utils/system/request'

export const admin_add = (data) => request('/admin_user/add', data, 'POST')
export const admin_delete = (data) => request('/admin_user/delete', data, 'POST')
export const admin_list = (data) => request('/admin_user/list', data, 'POST')
export const admin_update = (data) => request('/admin_user/update', data, 'POST')
export const admin_info = (data) => request('/admin_user/info', data)