// 引入资源
import Vue from 'vue';

// 注册全局过滤器
import Moment from 'moment'
Vue.filter('convertTime',(value)=>{
    return Moment(value).format('YYYY-MM-DD');
})
Vue.filter('convertTitle',(value,limit)=>{
    if(value.length>limit){
        return value.substr(0,limit)+'...'
    }
    return value
})
//注册全局组件
import MyUl from './components/Commons/MyUl.vue'
import MyLi from './components/Commons/MyLi.vue'
import Navbar from './components/Commons/Navbar.vue'
Vue.component(Navbar.name,Navbar)
Vue.component(MyLi.name,MyLi)
Vue.component(MyUl.name,MyUl)


// 引入路由相关组件
import App from './components/App.vue'
import Home from './components/Home/Home.vue';
import Vip from "./components/Vip/Vip.vue";
import Gwc from "./components/Gwc/Gwc.vue";
import Search from "./components/Search/Search.vue";
import NewsList from "./components/News/List.vue";
import Detail from "./components/News/Detail.vue"
import PhotoList from "./components/Photo/PhotoList.vue"
// VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter);
let router =new VueRouter();
router.addRoutes([
    // 重定向
    { path:'/',redirect: {
        name:'home'
    }},
    { name: 'home', path: '/home', component:Home},
    { name: 'vip', path: '/vip', component:Vip},//会员
    { name: 'gwc', path: '/gwc', component:Gwc},//购物车
    { name: 'search', path: '/search', component:Search},//搜索
    { name: 'news.list', path: '/news/list', component: NewsList},//新闻列表
    { name: 'news.detail', path:'/news/detail',component:Detail },//新闻详情
    { name: 'photo.list' ,path:'/photo/list/:categoryId',component:PhotoList}
])
// mintiUi
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi)
// 引入全局css文件
import './static/css/global.css'
// Axios
import Axios from 'axios';
Vue.prototype.$axios=Axios;
Axios.defaults.baseURL ='http://vue.studyit.io/api/'

new Vue({
    el:'#app',
    render:c=>c(App),
    router
})