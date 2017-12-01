export default {
    template:`
        <div>
            我是详情
            {{hero}}
        </div>
    `
    //1:created数据已经完成初始化，更适合操作data中的属性
    //2:此时获取路由参数，将参数与data中的属性进行结合
    //3:页面可以显示正常数据
     ,data(){
        return {
            heros:[{id:1,name:'李白'},{id:2,name:'娜可露露'},{id:3,name:'貂蝉'},{id:4,name:'后羿'},{id:5,name:'王昭君'}],
            hero:''
        }
    },
    created(){
        //获取路由参数中的查询字符串
        //<router-link :to="{name:'detail',query:{id:1}  }"></router-link>
        // console.log(this.$route.query.id);
        //this是Vue的实例
        // console.log(this.$route.query);
        console.log(this.$route.params);

        //查找元素
        var id = this.$route.query.id||this.$route.params.mid;
        this.hero = this.heros.find( ele => ele.id == id)

    }
}