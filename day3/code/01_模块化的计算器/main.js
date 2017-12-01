import Vue from './vue.js'; //默认导入  export default {}||''
//export 和 import只能在顶级作用域，不能在{}中
import App from './App.js';



//启动
new Vue({
    el:'#app',
    render:c=>c(App)
});