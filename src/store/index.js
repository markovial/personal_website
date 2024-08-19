import { createStore } from 'vuex'
import contentModule from './modules/content'
import themeModule from './modules/theme'
import skillsModule from './modules/skills'

export default createStore({
  modules: {
    content: contentModule,
    theme: themeModule,
    skills: skillsModule
  }
})