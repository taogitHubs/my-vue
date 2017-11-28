export default{
    template:`
         <div style="background-color:yellowgreen;">
           ID:<input type="text"  v-model="addId" />
           名称:<input type="text" v-model="addName"  />
           <button @click="addHero">添加</button>
       </div>
    `,
    data(){
        return {
            addId: '',
            addName: ''
        }
    },
    props:['heros'],
    methods:{
        addHero() {
            this.heros.push({
                id: this.addId,
                name: this.addName
            })
        }
    }
}