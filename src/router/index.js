import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/login",
    name: "login",
    component: () =>
        import ("@/views/login")
}, {
    path: "/",
    // name: "layout",
    component: () =>
        import ("@/views/layout/index.vue"),
    children: [{
        path: "", //默认子路由
        name: "home",
        component: () =>
            import ("@/views/layout/home.vue")
    }, {
        path: "/video",
        name: "video",
        component: () =>
            import ("@/views/layout/video.vue")
    }, {
        path: "/request",
        name: "request",
        component: () =>
            import ("@/views/layout/request.vue")
    }, {
        path: "/my",
        name: "my",
        component: () =>
            import ("@/views/layout/my.vue")
    }, ]
}, ]

const router = new VueRouter({
    routes
})

export default router