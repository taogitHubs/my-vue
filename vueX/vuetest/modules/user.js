export default{
    // 数据
    namespaced: true,
    state:{
        users:[]
    },
    // 修改
    mutations: {
        add(state,user){
            state.users.push(user)
        }
    },
    // 分支
    actions: {
        addUser(store,user){
            store.commit('add',user)
        }
    },
    // 获取
    getters:{
        getUser(state){
            return state.users
        }
    }

    
}