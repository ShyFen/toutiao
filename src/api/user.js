// 用户相关请求
import request from "@/utils/request.js"

export const login = data => {
    return request({
        method: "post",
        url: "/authorizations",
        data
    })
}