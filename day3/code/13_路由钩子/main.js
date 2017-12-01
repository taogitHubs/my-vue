import Vue from '../vue.js';
import VueRouter from '../vue-router.js';

import Home from './Home.js';
import App from './App.js';


Vue.use(VueRouter);

var router = new VueRouter();
router.addRoutes([
    {
        name:'home',path:'/home',component:Home,meta:{
            name:'jack',age:18
        }
    },
    {
        name:'home222',path:'/home22222',component:Home
    }
]);

//全局守卫
router.beforeEach((to, from, next) => {
    //  当从/   访问到 /home     to的对象是代表home,并且有元数据
    console.log(to);
    console.log(from);

    // next(); //放行
    // next(false); //取消用户导航
    // 跳转去别的路由
    if(to.name == 'home222'){
        next(); //放行完事
    }else{
        next({
            name:'home222'
         });
    }
});


new Vue({
    el:'#app',
    render:c=>c(App),
    router
})