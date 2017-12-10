<template>
    <div>
        <subvue></subvue>
        <hr/>
        {{getNumf}}
        <hr/>
        <button @click="addUser">添加</button>
        {{getUser}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:1
        }
    },
    created () {
        // console.log(this.$store.state.num)
        // 传入参数 载荷数据
        // this.$store.commit('subByNum',{
        //     num:5
        // });
        // this.$store.commit('add');
        this.$store.dispatch('addProdNum')
        this.$store.dispatch('substractProdNum',{
            num:8
        });
    },
    computed: {
        getNumf(){
            return this.$store.getters.getNum
        },
        getUser(){
            return this.$store.getters['user/getUser']
        }
    },
    methods: {
        addUser(){
            return this.$store.dispatch('user/addUser',{
                name:'xxx'+(this.count++)
            })
        }
    }
}
</script>

<style scope>

</style>

