// src/store/index.js
import { createStore } from 'vuex'
import themeModule from './modules/theme'
import contentModule from './modules/content'

export default createStore({
  modules: {
    theme: themeModule,
    content: contentModule
  }
})