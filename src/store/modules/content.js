// src/store/modules/content.js
import booksData from '@/assets/books.json'

export default {
  namespaced: true,
  state: () => ({
    sidebarOpen: false,
    books: [],
    blogPosts: []
  }),
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen(state, value) {
      state.sidebarOpen = value
    },
    setBooks(state, books) {
      state.books = books
    },
    setBlogPosts(state, posts) {
      state.blogPosts = posts
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('toggleSidebar')
    },
    setSidebarOpen({ commit }, value) {
      commit('setSidebarOpen', value)
    },
    loadBooks({ commit }) {
      commit('setBooks', booksData)
    },
    async loadBlogPosts({ commit }) {
      const context = require.context('@/assets/blog', true, /\.md$/)
      const posts = await Promise.all(context.keys().map(async (key) => {
        const { attributes, body } = await import(`@/assets/blog${key.slice(1)}`)
        const slug = key.split('/').pop().replace('.md', '')
        return {
          slug,
          ...attributes,
          content: body
        }
      }))
      commit('setBlogPosts', posts)
    }
  },
  getters: {
    isSidebarOpen: state => state.sidebarOpen,
    getBooks: state => state.books,
    getBlogPosts: state => state.blogPosts,
    getBlogPost: (state) => (slug) => {
      return state.blogPosts.find(post => post.slug === slug)
    }
  }
}