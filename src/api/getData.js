import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.2.132:3000/api'
axios.defaults.headers['Content-Type'] = 'application/json'
// 请求拦截
axios.interceptors.request.use(confing => {
  let token = localStorage.getItem('token')
  if (token) {
    confing.headers.common['Authorization'] = token
  }
  return confing
}, error => Promise.reject(error))
// 响应拦截
axios.interceptors.response.use(res => res, error => Promise.reject(error))

// 登录
export const login = (data, headers = {}) => {
  return axios.post('/login', data, headers)
}
// 获取用户信息
export const getAdminInfo = (headers = {}) => {
  return axios.get(`/login`, headers)
}
// 获取地图信息
export const getChinaMap = (headers = {}) => {
  return axios.get(`/china.json`, headers)
}
