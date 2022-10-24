import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:''
  },
  mutations: {
    changUser(state,user){
      if(user) {
        state.user = user
        localStorage.setItem('user',user)
        console.log(localStorage.getItem('user'),'--------->localStorage')
      }else {
        localStorage.removeItem('user')
      }
    },
    changData(state,user){
      state.user = user
      localStorage.setItem('user',user)
      console.log(localStorage.getItem('user'),'--------->localStorage2')
    }
  },
  actions: {
    actionValue(context,user) {
      context.commit('changUser',user)
    },
    product(context,user) {
      context.commit('changData',user)
    }
  },
  getters:{
    getNumber: state => state.user,
    towUser(state){
      return state.user
    }
  },
  modules: {
  }
})
