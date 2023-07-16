import axios from 'axios' 
import { Promise } from 'core-js';

const service = axios.create({
    // 设置基础url
    baseURL: ,
    // 请求超时时间
    timeout:5000
})

// 请求拦截
service.interceptors.request.use(
    config => {
        config.headers['Content-type'] = "application/json; charset=utf-8";
        config.data = JSON.stringify(config.data)
        const token = localStorage.getItem('token')
        if(token) {
            config.headers['x-token'] = `${token}`
          }        
        return config
    },
    error =>{
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截
service.interceptors.response.use(
    response =>{
        if (response.data.code === 0 ) {     
            return Promise.resolve(response.data)
          }
        return response
    },
    error =>{
        console.log(error);
        return Promise.reject(error);
    }
)

export default service

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url,
        params,
        ...config
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
  
  /* 统一封装post请求  */
  export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url,
        data,
        ...config
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
  
  export const del = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'delete',
        url: url,
        data: data,
        ...config,
      }).then(response => {
        resolve(response);
      }).catch(error => {
        reject(error);
      });
    });
  };