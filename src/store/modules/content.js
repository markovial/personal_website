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
      try {
        console.log('Starting to load blog posts...')
        const context = require.context('@/assets/blog', true, /\.md$/)
        console.log('Found markdown files:', context.keys())
        
        const posts = await Promise.all(context.keys().map(async (key) => {
          try {
            console.log('Processing file:', key)
            const { attributes, body } = await import(`@/assets/blog${key.slice(1)}`)
            const slug = key.split('/').pop().replace('.md', '')
            console.log('Processed post:', { slug, attributes })
            return {
              slug,
              ...attributes,
              content: body
            }
          } catch (error) {
            console.error('Error processing markdown file:', key, error)
            return null
          }
        }))
        
        const validPosts = posts.filter(post => post !== null)
        console.log('Loaded valid posts:', validPosts)
        commit('setBlogPosts', validPosts)
      } catch (error) {
        console.error('Error in loadBlogPosts:', error)
        throw error
      }
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
