import axios from 'axios'
import router from '../router/index'
function myAxios(config){
    //创建axios实例
    const service=axios.create({
        baseURL: 'http://10.128.193.156',//后端的域名
        withCredentials:false,
        // 配置请求头
        headers: {
            get: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来

            },
            post: {
                'Content-Type': 'application/json;charset=utf-8'
                // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
            },


        },
    })



//     //请求拦截
    service.interceptors.request.use(config=>{


        //....后续根据实际情况去配置

        return config
    },err =>Promise.reject(err))


    service.interceptors.response.use(
        res =>{

            return res.data

        },
        ()=>{

            alert('请求错误，请重试')
        }

    )


    return service(config)
}
export default myAxios;