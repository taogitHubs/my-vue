export default{
    // 数据
    state: {
        num: 1
    },
    // 改变数据
    mutations: {
        // 数据增加
        add(state){
            // setTimeout(() => {
            state.num++;
            // }, 0);
        },
        // 数据减少
        subByNum(state, obj){
            // setTimeout(() => {
            state.num -= obj.num
            // }, 0);
        }
    },
    actions: {//分发提交修改
        addProdNum({ commit }){
            commit('add')
        },
        substractProdNum({ commit }, obj){
            commit('subByNum', obj)
        }
    },
    getters: {
        getNum(state){
            return state.num
        }
    }

}