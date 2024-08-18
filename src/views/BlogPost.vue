<!-- src/views/BlogPost.vue -->
<template>
  <div class="blog-post" v-if="post">
    <h1>{{ post.title }}</h1>
    <div v-html="post.content"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'BlogPost',
  setup() {
    const store = useStore()
    const route = useRoute()

    const post = computed(() => store.getters['content/getBlogPost'](route.params.slug))

    return {
      post
    }
  }
}
</script>

<style scoped>
.blog-post {
  padding: 20px;
}

/* You might want to add styles for images and LaTeX equations here */
</style>