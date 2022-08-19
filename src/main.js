import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/index.less"
import "vant/lib/index.css"
import {
    Form,
    Field,
    NavBar,
    Button,
    Toast,
    CountDown,
    Tabbar,
    TabbarItem,
    Tab,
    Grid,
    GridItem,
    Cell,
    CellGroup,
    Dialog,
    Image as VanImage
} from "vant"

// rem适配
import "lib-flexible"

Vue.use(Form).use(Field).use(NavBar).use(Button).use(Toast).
use(CountDown).use(Tabbar).use(TabbarItem).use(Tab).use(VanImage)
    .use(Grid).use(GridItem).use(Cell).use(CellGroup).use(Dialog)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')