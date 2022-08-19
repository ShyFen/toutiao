 // 用户登录信息
 import request from "@/utils/request.js";

 export const getUserInfo = token => {
     return request({
         method: "get",
         url: "user",
         //  请求头
         headers: {
             Authorization: `Bearer ${token}`
         }
     })
 }