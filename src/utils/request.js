//先导入axios对象
import axios from "axios"

//创建axios实例
const Server = axios.create({
    baseURL: "",
    timeout: 5000
})

//定义一个请求拦截器
Server.interceptors.request.use((config) => {

    let token = window.sessionStorage.getItem("remember_token");

    config.headers = {
        deviceType: "H5",
        DeviceID: ID,
        Authorization: `Bearer ${token}`
    }

    return config

}, (error) => {

    return Promise.reject(error)

})

//4.response拦截器
Server.interceptors.response.use((response) => {
    //在response拦截器中  隐藏进度条
    // NProgress.done()

    // console.log(response.data);
    //   判断如果接口的状态为200的话，返回data数据即可
    // if(response.status == 200){
    //     // store.commit("changeLoading",false)//修改Loading的值
    //     return response.data;
    // }
    return response;
}, (error) => {
    return Promise.reject(error);
});

//5. 抛出实例
export default Server;