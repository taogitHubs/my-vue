export default {
    template: `
        <div>
            用户名:<input type="text" v-model="username"/>
            <button @click="doLogin">登录</button>
            <router-view></router-view>
        </div>
    `,data(){
        return {
            username:''
          } 
     },
     methods :{
         doLogin(){
            //  console.log(this.$)
            this.$.ajax({
                url: 'http://localhost:3000/users/' + this.username,
                type:'put',
                data:'isLongin=true',
                dataType:'json',
                success:()=>{
                    window.localStorage.setItem('username', this.username);
                    console.log('登录成功');
                }
            })
            console.log(1)
         }
     }
}