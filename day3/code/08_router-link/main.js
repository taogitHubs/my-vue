import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

//引入组件们
import Home from  './Home.js';
import App from './App.js';

//安装插件  
//  1: 注册全局组件
//  2: 给Vue原型挂载功能,所有Vue的实例共享
Vue.use(VueRouter);
//创建路由对象
var router = new VueRouter({
    routes:[
        { name:'home',path:'/yourhome',component:Home}
    ]
});
//router.addRoutes([]); // 随时动态添加规则
//把规则加入到Vue选项中
new Vue({
    el:'#app',
    render:c=>c(App),
    router
});