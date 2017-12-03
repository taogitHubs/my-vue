export default {
    template:`
        <div>
           <router-link :to="{name:'login'}" >登录页</router-link>
           <button @click="exit">退出</button>
            <router-link :to="{name:'music'}">音乐首页</router-link ">
           <router-view></router-view>
        </div>
    `,
    methods:{
        exit(){
        var username = window.localStorage.getItem('username');
        //    console.log(this.$) 
        this.$.ajax({
            url: 'http://localhost:3000/users/' + username,
            type: 'put',
            data: 'isLogin=false',
            dataType: 'json',
            success: () => {
                this.$router.push({
                    name: 'login'
                })
            }

        })
        }
    }
}