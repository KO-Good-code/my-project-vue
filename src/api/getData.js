import axios from 'axios'
import Vue from 'vue'

axios.defaults.baseURL = 'http://192.168.2.132:3000/api'
axios.defaults.headers['Content-Type'] = 'application/json'
// 请求拦截
axios.interceptors.request.use(confing => {
  let token = localStorage.getItem('token')
  if (token) {
    confing.headers.Authorization = `Bearer ` + token
  }
  return confing
}, error => Promise.reject(error))
// 响应拦截
axios.interceptors.response.use(res => res, error => {
  console.log(error.response.status)
  if (error.response.status === 401) {
    localStorage.clear()
    window.location.href = '/'
    Vue.prototype.$message({
      type: 'error',
      message: '登录超时，请重新登录！'
    })
  }
  return Promise.reject(error)
})

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

// 获取管理员信息
export const getAdminData = (headers = {}) => {
  return axios.get(`/admindata`, headers)
}

// 获取用户信息
export const getUserDate = (headers = {}) => {
  return axios.get(`/user`, headers)
}

// 修改用户信息
export const upUserDate = (data, headers = {}) => {
  return axios.put(`/user`, data, headers)
}
