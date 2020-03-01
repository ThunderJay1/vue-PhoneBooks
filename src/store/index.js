import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const PhoneCard = [
  {
    name: 'lily',
    tel: 123456
  },
  {
    name: 'lucy',
    tel: 123456
  },
  {
    name: 'rose',
    tel: 12345685
  },
  {
    name: 'jack',
    tel: 123456321
  },
  {
    name: 'jay',
    tel: 123456321
  },
  {
    name: 'kun',
    tel: 123456321
  }
]
export default new Vuex.Store({
  state: {
    personCard: []
  },
  getters: {
    currentBooks: (state) => (s) => {
      return state.personCard.filter(item => {
        return item.name.indexOf(s) > -1
      }
      )
    }
  },
  mutations: {
    getPersonCards (state, n) {
      state.personCard = n
    },
    addPersonCards (state, item) {
      state.personCard.push(item)
      console.log(item)
    }
  },
  actions: {
    getPersonCardsSync ({ commit }) {
      setTimeout(function () {
        commit('getPersonCards', PhoneCard)
      })
    }
  },
  modules: {
  }
})
