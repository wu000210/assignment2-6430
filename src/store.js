import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    sendUser({commit}, user) {
      commit("SET_USER", user)
    } 
  },
  getters: {
    getUser: state =>{
      return state.user;
    }
  }
});
