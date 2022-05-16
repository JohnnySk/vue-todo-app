import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      removed: []
    },
    mutations: {
      addRemoved (state, item) {
        state.removed.push(item);
      }
    },
    getters: {
        allRemoved(state) {
            return state.removed
        }
    }
  });