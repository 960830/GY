//先导入axios对象
import axios from "axios"
// import package from '../../package.json';

//获取登录接口访问
export const login = (params) => {
    return axios.post("http://120.53.31.103:84/api/app/login",{...params})
}

//获取banner轮播图
const getlist = async function(){
    let {data}=await axios.get('http://120.53.31.103:84/api/app/banner')
    return data
}
export {
    getlist,
}

//获取首页列表
const indexlist = async function(){
    let {data} = await axios.get('http://120.53.31.103:84/api/app/recommend/appIndex')
    return data
}
export {
    indexlist
}

//获取首页列表
const penglist = async function(){
    let {data} = await axios.get('http://120.53.31.103:84/api/app/myStudy/2')
    return data
}
export {
    penglist
}

//获取课程列表
export const course = (params) => {
    return axios.get(`http://120.53.31.103:84/api/app/courseBasis?`,{params:params})
}

//获取课程详情列表
export const courselist = (id) => {
    return axios.get(`http://120.53.31.103:84/api/app/courseInfo/basis_id=${id}`)
}