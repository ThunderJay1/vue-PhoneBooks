import axios from 'axios'
import router from 'router'

const http = axios.create({
  baseURL: '/api',
  timeout: 6000
})

http.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers['Authorization'] = 'Bearer' + token
  }
  return config;
}, function (err) {
  console.log('请求拦截错误', err)
  return Promise.reject(err)
})

http.interceptors.response.use(function (response) {
  if(response.data.token) {
    sessionStorage.setItem('token', response.data.token)
  }
  return response
}, function (err) {
  console.log('请求错误: ', err)
  const _response = err.response
  switch(_response) {
    case 401:
      return router.replace({
        path: '/login',
        query: {redirect: router.currentRouter.fullPath}
      })
  }
  return Promise.reject(err)
})

export default http
