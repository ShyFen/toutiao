import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from "@/utils/storage.js"
Vue.use(Vuex)
const TOUKEN_KEY = "TOUTIAO_USER";

export default new Vuex.Store({
    state: {
        // 存储当前用户登录信息
        user: getItem(TOUKEN_KEY),
    },
    mutations: {
        setUser(state, data) {
            state.user = data;
            setItem(TOUKEN_KEY, state.user)
        }
    },
    actions: {},
    modules: {}
})