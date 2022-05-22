import { request } from '@/utils/system/request'

export const add = (data) => request('/role/add', data, 'POST');
export const del = (data) => request('/role/delete', data, 'POST')
export const update = (data) => request('/role/update', data, 'POST')
export const getList = (data) => request('/role/list', data)
export const info = (data) => request('/role/info', data)