<!-- src/views/Blog.vue -->
<template>
  <div class="blog content-container">
    <div class="controls">
      <div class="sort-container">
        <span>Sort: </span>
        <button @click="cycleSortOption" class="sort-button">{{ sortOptionLabel }}</button>
      </div>
      <div class="view-toggle">
        <button @click="toggleView" class="view-button">
          <i :class="['fas', isListView ? 'fa-th-large' : 'fa-list']"></i>
        </button>
      </div>
    </div>
    <ul :class="['blog-list', { 'card-view': !isListView }]">
      <li v-for="post in sortedBlogPosts" :key="post.slug" class="blog-item" @click="navigateToBlogPost(post.slug)">
        <div class="blog-summary">
          <img v-if="!isListView && post.image" :src="post.image" :alt="(post.title || 'Untitled') + ' cover'" class="blog-cover">
          <div v-else-if="!isListView" class="blog-cover-placeholder">{{ (post.title && post.title[0]) || 'U' }}</div>
          <div class="blog-info">
            <div class="blog-title">{{ post.title || 'Untitled' }}</div>
            <div class="blog-date">{{ formatDate(post.date) }}</div>
            <p class="blog-excerpt">{{ post.excerpt || 'No excerpt available' }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Blog',
  setup() {
    const store = useStore()
    const router = useRouter()
    const blogPosts = ref([])
    const sortOptions = ['date', 'title']
    const sortOptionIndex = ref(0)
    const isListView = ref(true)

    const sortOption = computed(() => sortOptions[sortOptionIndex.value])
    const sortOptionLabel = computed(() => {
      const labels = {
        date: 'Date',
        title: 'Title'
      }
      return labels[sortOption.value]
    })

    onMounted(async () => {
      await store.dispatch('content/loadBlogPosts')
      blogPosts.value = store.getters['content/getBlogPosts']
    })

    const formatDate = (dateString) => {
      if (!dateString) return 'Not available'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const cycleSortOption = () => {
      sortOptionIndex.value = (sortOptionIndex.value + 1) % sortOptions.length
    }

    const toggleView = () => {
      isListView.value = !isListView.value
    }

    const navigateToBlogPost = (slug) => {
      router.push({ name: 'BlogPost', params: { slug } })
    }

    const sortedBlogPosts = computed(() => {
      return [...blogPosts.value].sort((a, b) => {
        if (sortOption.value === 'date') {
          return new Date(b.date || 0) - new Date(a.date || 0)
        } else {
          return (a.title || '').localeCompare(b.title || '')
        }
      })
    })

    return {
      sortedBlogPosts,
      sortOptionLabel,
      isListView,
      formatDate,
      cycleSortOption,
      toggleView,
      navigateToBlogPost
    }
  }
}
</script>


<style scoped>
.blog {
  padding: var(--spacing-small);
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-medium);
}

.sort-container, .view-toggle {
  display: flex;
  align-items: center;
  font-size: var(--font-size-small);
  color: var(--highlight-color);
}

.sort-button, .view-button {
  background: none;
  border: none;
  color: var(--text-color);
  font-family: var(--font-family-main);
  font-size: var(--font-size-small);
  cursor: pointer;
  padding: 0;
  margin-left: var(--spacing-small);
}

.sort-button {
  text-decoration: underline;
}

.view-button {
  font-size: var(--font-size-h3);
}

.blog-list {
  list-style-type: none;
  padding: 0;
}

.blog-list.card-view {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-medium);
}

.blog-item {
  margin-bottom: var(--spacing-medium);
  transition: background-color 0.3s ease;
  border-radius: 4px;
  cursor: pointer;
}

.card-view .blog-item {
  width: calc(33.33% - var(--spacing-medium));
  margin-bottom: 0;
}

.blog-summary {
  display: flex;
  align-items: flex-start;
}

.blog-cover, .blog-cover-placeholder {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: var(--spacing-small);
}

.blog-cover-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--highlight-color);
  color: white;
  font-size: 2rem;
}

.blog-info {
  flex: 1;
}

.blog-title {
  font-weight: bold;
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-small);
  line-height: 1.2;
}

.blog-date {
  font-style: italic;
  font-size: var(--font-size-small);
  color: var(--highlight-color);
  margin-bottom: var(--spacing-small);
}

.blog-excerpt {
  font-size: var(--font-size-small);
  line-height: 1.4;
  margin-bottom: var(--spacing-small);
  text-align: justify;
}

@media (max-width: 768px) {
  .card-view .blog-item {
    width: calc(50% - var(--spacing-medium));
  }
}

@media (max-width: 480px) {
  .card-view .blog-item {
    width: 100%;
  }
}
</style>
