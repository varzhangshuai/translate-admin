import axios from 'axios'
import store from '@/store'
import { ElMessage } from 'element-plus'
// const baseURL = import.meta.env.VITE_BASE_URL
const baseURL =  process.env.NODE_ENV === 'development'? '/dev' : '/'
const service = axios.create({
  baseURL: baseURL,
  timeout: 10000
})

// 请求前的统一处理
service.interceptors.request.use(
  (config) => {
    // JWT鉴权处理
    if (store.getters['user/token']) {
      config.headers['token'] = store.state.user.token
      // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      showError(res)
      return Promise.reject(res)
    }
  },
  (error)=> {
    console.log(error) // for debug
    const badMessage = error.message || error
    const code = parseInt(badMessage.toString().replace('Error: Request failed with status code ', ''))
    showError({ code, message: badMessage })
    return Promise.reject(error)
  }
)

function showError(error) {
  if (error.code === 403) {
    // to re-login
    store.dispatch('user/loginOut')
  } else {
    ElMessage({
      message: error.msg || error.message || '服务异常',
      type: 'error',
      duration: 3 * 1000
    })
  }
  
}
export const request = (url, data, method = 'GET') => service({
  url, data, method
})

export default service