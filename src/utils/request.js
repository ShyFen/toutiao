// 请求模块
import axios from "axios"

const request = axios.create({
    // 接口的基准路径
    // baseURL: "http://ttapi.research.itcast.cn/" //旧的
    baseURL: "http://toutiao.itheima.net/v1_0/"
});

export default request