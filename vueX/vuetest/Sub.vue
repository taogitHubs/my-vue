<template>
    <div>
        {{getNumstore}}
        <button @click="sub">-3</button>
    </div>
</template>
<script>
export default {
    name:'subvue',
    data(){
        return {

        }
    },
    created () {
        
    },
    computed: {
        getNumstore(){
            return this.$store.getters.getNum
        }
    },
    methods: {
        sub(){
            this.$store.dispatch('substractProdNum',{
            num:3
        });
        }
    }

}
</script>
<style scope>

</style>

