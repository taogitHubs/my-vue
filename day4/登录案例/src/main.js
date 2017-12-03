import Vue from '../../vue.js'
import VueRouter from '../../vue-router.js'
// 引入各个组件
import Home from './components/Home.js'
import Login from './components/Login.js'
import Music from './components/Music.js'
// import List from "./components/List.js"
// 引入jq的$
import $ from '../../jquery.min.js'
Vue.prototype.$=$;//让所有组件中的this都能使用
var App={
    template:`
        <router-view></router-view>
    `
}
// 安装插件
Vue.use(VueRouter)

var router=new VueRouter();
router.addRoutes([
    {
        name:'home',path:'/home',component:Home,
        children:[
            { name:'login',path:'login',component:Login},
            { name: 'music', path: 'music', component: Music, meta: { check: true }, }
        ]
    }
])
router.beforeEach((to,form,next)=>{
    var matched=to.matched;
    var checkLogin=false;
    for(var i=0; i<matched.length;i++){
        if(matched[i].meta.check){
            checkLogin=true;
        }
    }
    if(!checkLogin){
        return next();
    }
    var username = window.localStorage.getItem('username');
    $.ajax({
        type: 'get',
        url: 'http://localhost:3000/users/' + username,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            if (data.isLongin == 'true') {
                //登录过
                next();
            } else {
                alert('去登录吧');
                next({
                    name: 'login'
                })
            }
        }
    })
})
new Vue({
     el:'#app',
     render:c=>c(App),
     router
})