// 手机验证码,每个手机号每分钟只发送一次
import request from "@/utils/request.js";

export const mobile = mobile => {
    return request({
        method: "get",
        url: `sms/codes/:${mobile}`
    })
}