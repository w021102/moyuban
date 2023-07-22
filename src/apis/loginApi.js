import {get , post} from '@/utils/index'

// 账号登录注册

/**
 *  登录
 * @param {*} data 
 * @returns 
 */
export const signIn = (data) => post('/api/v1/user/signin',data)

/**
 * 注册
 * @param {} data 
 * @returns 
 */
export const register = (data) => post('/api/v1/user/signup',data)

// 手机号验证码登录
/**
 * 获取验证码
 * @param {*} data 
 * @returns 
 */
export const sendMsg = (data) => post('/api/v1/user/sendMsg',data)

/**
 * 手机号登录
 * @param {*} data 
 * @returns 
 */
export const phoneLogin = (data) => post('/api/v1/user/phoneLogin',data)