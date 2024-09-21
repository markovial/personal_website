<!-- src/views/BlogPost.vue -->

<template>
  <div class="blog-post content-container" v-if="post">
    <h1>{{ post.title }}</h1>
    <div class="post-meta">
      <span class="post-date">{{ formatDate(post.date) }}</span>
      <span v-if="post.categories" class="post-categories">
        Categories: {{ post.categories.join(', ') }}
      </span>
    </div>
    <div ref="contentRef" v-html="renderedContent"></div>
  </div>
</template>

<script>
import { computed, onMounted, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

export default {
  name: 'BlogPost',
  setup() {
    const store = useStore()
    const route = useRoute()
    const post = ref(null)
    const contentRef = ref(null)
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })

    // Custom renderer for image paths
    md.renderer.rules.image = (tokens, idx) => {
      const token = tokens[idx]
      const srcIndex = token.attrIndex('src')
      let src = token.attrs[srcIndex][1]
      const altText = token.content || ''

      // Adjust the src path to use public path
      if (src.startsWith('Images/')) {
        src = `${process.env.BASE_URL}assets/blog/${route.params.slug}/${src}`
      }

      return `<img src="${src}" alt="${altText}">`
    }

    onMounted(async () => {
      await store.dispatch('content/loadBlogPosts')
      post.value = store.getters['content/getBlogPost'](route.params.slug)
      await nextTick()
      renderMathJax()
    })

    const renderedContent = computed(() => {
      if (post.value && post.value.content) {
        return md.render(post.value.content)
      }
      return ''
    })

    const formatDate = (dateString) => {
      if (!dateString) return 'Not available'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const renderMathJax = () => {
      if (window.MathJax && contentRef.value) {
        window.MathJax.typesetPromise([contentRef.value])
      }
    }

    return {
      post,
      renderedContent,
      formatDate,
      contentRef
    }
  }
}
</script>

<style scoped>
.blog-post {
  padding: var(--spacing-medium);
}

.post-meta {
  font-size: var(--font-size-small);
  color: var(--highlight-color);
  margin-bottom: var(--spacing-medium);
}

:deep(p) {
  text-align: justify;
}

:deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
  text-align: left;
}

:deep(ul), :deep(ol) {
  text-align: left;
}

:deep(img) {
  max-width: 100%;
  height: auto;
}
</style>
