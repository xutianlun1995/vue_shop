/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */

import axios from 'axios'
export default function ajax(url,data={},type='GET'){
   return new Promise(function (resolve, reject) {
       // 执行异步ajax请求
       let promise
       if (type === 'GET') {
         // 准备url query参数数据
         let dataStr = '' //数据拼接字符串
         Object.keys(data).forEach(key => {
           dataStr += key + '=' + data[key] + '&'
         })
         if (dataStr !== '') {
           dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
           url = url + '?' + dataStr
         }
         // 发送get请求
         promise = axios.get(url)
       } else {
         // 发送post请求
         promise = axios.post(url, data)
       }
       promise.then(function (response) {
         // 成功了调用resolve()
         resolve(response.data)
       }).catch(function (error) {
         //失败了调用reject()
         reject(error)
       })
     })

}

/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL+'/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL+'/shops', {longitude, latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL+'/search_shops', {geohash, keyword})
// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL+'/login_pwd', {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendcode', {phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL+'/login_sms', {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userinfo')
// 10、用户登出
export const reqLogout = () => ajax(BASE_URL+'/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods')


