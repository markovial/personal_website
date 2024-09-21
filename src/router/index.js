// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Books from '../views/Books.vue'
import Blog from '../views/Blog.vue'
import BlogPost from '../views/BlogPost.vue'
import Physical from '../views/Physical.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'Markov' }
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
    meta: { title: 'Books' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Writing' }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost,
    meta: { title: 'Blog Post' }
  },
  {
    path: '/activities',
    name: 'Physical',
    component: Physical,
    meta: { title: 'Physical' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Me' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
