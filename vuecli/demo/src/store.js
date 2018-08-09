import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     count:0
  },
  mutations: {
    // =methods方法
     add(state,num){
       state.count+=num
     },
     reduce(state){
      state.count--
    }
  },
  actions: {
    //异步
    actionAdd({commit}){
      setTimeout(()=>{
        commit("add",50)
      },1000)
     
    }
  },
  getters:{
    // =computed计算属性
    count(state){
      return state.count+=100
    }
  }
})
