<template>
    <div>
        <mt-header  title="固定在顶部"></mt-header>
        <router-view class="tmpl"></router-view>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="home">
                <img slot="icon" src="../static/img/index.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="vip">
                <img slot="icon" src="../static/img/vip.png">
                会员
            </mt-tab-item>
            <mt-tab-item id="gwc">
                <img slot="icon" src="../static/img/shopcart.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="search">
                <img slot="icon" src="../static/img/find.png">
                查找
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      selected:''
    };
  },
  watch:{
      selected(newV){
        console.log(newV)
        this.$router.push({
            name:newV
        })
      }
  }
};
</script>
<style scoped>
.mint-tabbar{
    position:fixed;
    bottom:0;
}
.tmpl{
    margin-bottom: 55px;
}
</style>



