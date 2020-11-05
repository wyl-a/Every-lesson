import axios from "axios"
import apl from "./path"
import {
    Guid
} from "../uits/guid"
import {
    Loading
} from 'element-ui';

let deviceid = null; //初始化设备id
//先获取设备id 如果有 使用之前的 如果没有获取最新的
console.log(Guid.NewGuid().ToString("D"))
let id = window.localStorage.getItem("deviceid")
if (id) {
    deviceid = id
} else {
    deviceid = Guid.NewGuid().ToString("D")
}
window.localStorage.setItem("deviceid", deviceid)


const instance = axios.create({ //axios创建的实例
    baseURL: 'http://120.53.31.103:84', // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    timeout: 5000, // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)  如果请求话费了超过 `timeout` 的时间，请求将被中断
    headers: {
        'X-Custom-Header': 'foobar' // `headers` 是即将被发送的自定义请求头
    }
});

var loading = null

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    loading = Loading.service();

    //登录之后再次请求时，会携带token进行身份验证
    let token = window.localStorage.getItem("token")
    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }
    config.headers.deviceid = deviceid
    config.headers.devicetype = "H5"

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    setTimeout(function () {
        loading.close()
    }, 500)
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export function request(method, url, params) { //创建的request函数，把函数抛出
    switch (method) { //switch判断
        case apl.METHODS.GET: //当请求的方式为GET的时候，
            return get(url, params) //把get方式return出去
        case apl.METHODS.POST: //当请求的方式为POST的时候，
            return post(url, params) //把post方式return出去
        case apl.METHODS.PUT:
            return put(url)
    }
}

function get(url, params) { //封装的一个get函数
    return instance.get(url, params)
}

function post(url, params) { //封装的一个post函数
    return instance.post(url, params)
}

function put(url) { //封装的一个put函数
    return instance.put(url)
}