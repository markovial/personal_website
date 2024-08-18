<!-- src/views/Blog.vue -->
<template>
  <div class="blog">
    <h1>Blog Posts</h1>
    <div v-for="post in blogPosts" :key="post.slug" class="blog-post-preview">
      <h2>{{ post.title }}</h2>
      <p>{{ post.excerpt }}</p>
      <router-link :to="{ name: 'BlogPost', params: { slug: post.slug } }">Read more</router-link>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Blog',
  setup() {
    const store = useStore()
    const blogPosts = computed(() => store.getters['content/getBlogPosts'])

    onMounted(() => {
      store.dispatch('content/loadBlogPosts')
    })

    return {
      blogPosts
    }
  }
}
</script>

<style scoped>
.blog {
  padding: 20px;
}

.blog-post-preview {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>