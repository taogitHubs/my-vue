import Vue from 'vue';
//引入vuex
import Vuex from "vuex";
import App from "./app.vue";
// 安装插件
Vue.use(Vuex)
// 引入模块
import Prod from "./modules/prodNum";
import User from "./modules/user";
// 创建sub全局组件
import Sub from "./Sub.vue";



Vue.component('subvue',Sub)
// 创建一个store
let store=new Vuex.Store({
    modules: {
        prod:Prod,
        user:User
    }
})

new Vue({
    el:'#app',
    render:c=>c(App),
    store,
})