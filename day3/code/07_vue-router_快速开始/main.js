// 在main.js中引入vue-router对象
import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

//引入组件们
import Home from './Home.js';
import App from './App.js';


//使用Vue来安装插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter();
// 配置路由规则
router .addRoutes([
    //path代表锚点值,component要填坑的组件
    {path:'/home',component:Home},//锚点值匹配才显示
]);
// 配置好的路由对象交给Vue
new Vue({
    el:'#app',
    render:c=>c(App), //App是一定会显示
    // router:router 
    router
});
// 留坑
