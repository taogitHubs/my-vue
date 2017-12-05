<template>
    <div class="cms-s-header">
        <h1 @click="goback">&nbsp<</h1>
        <h1 class="page-title" >{{title}}</h1>
    </div> 
</template>
<script>
export default {
    name:'navbar-vue',
    methods: {
        goback(){
            this.$router.go(-1)
        }
    },
    props: ['title'],
    data() {
        return {
           
        };
    }
};
</script>
<style scoped>
.cms-s-header {
  height: 40px;
  background-color: #f7f7f7;
}
.tmpl h1 {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin-top: 0px;
  margin-bottom: 0px;
}
.page-title {
  margin-left: 25%;
}
</style>


