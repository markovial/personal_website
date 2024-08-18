// src/store/modules/theme.js
export default {
  namespaced: true,
  state: () => ({
    isDarkMode: false
  }),
  mutations: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode
    },
    setDarkMode(state, value) {
      state.isDarkMode = value
    }
  },
  actions: {
    toggleTheme({ commit }) {
      commit('toggleTheme')
    },
    setDarkMode({ commit }, value) {
      commit('setDarkMode', value)
    }
  },
  getters: {
    isDarkMode: state => state.isDarkMode
  }
}