<!-- src/components/BookTab.vue -->
<template>
  <div class="book-tab">
    <div class="controls">
      <div class="sort-options">
        <span>Sort:</span>
        <button 
          v-for="option in sortOptions" 
          :key="option.value"
          @click="currentSort = option.value"
          :class="{ active: currentSort === option.value }"
        >
          <i :class="['fas', option.icon]"></i> {{ option.label }}
        </button>
      </div>
      <div class="view-toggle">
        <span>View:</span>
        <button 
          v-for="view in viewOptions" 
          :key="view.value"
          @click="changeView(view.value)"
          :class="{ active: currentView === view.value }"
        >
          <i :class="['fas', view.icon]"></i>
        </button>
      </div>
    </div>

    <div :class="['book-list', currentView + '-view']">
      <BookItem
        v-for="book in sortedRegularBooks"
        :key="getUniqueKey(book)"
        :book="book"
        :currentView="currentView"
        @click="$emit('navigate-to-book', book.isbn)"
      />
    </div>

    <h2>Comics</h2>
    <div :class="['book-list', currentView + '-view']">
      <BookItem
        v-for="book in sortedComicBooks"
        :key="getUniqueKey(book)"
        :book="book"
        :currentView="currentView"
        @click="$emit('navigate-to-book', book.isbn)"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import BookItem from '@/components/BookItem.vue'

export default {
  name: 'BookTab',
  components: { BookItem },
  props: {
    tab: {
      type: String,
      required: true
    },
    regularBooks: {
      type: Array,
      required: true
    },
    comicBooks: {
      type: Array,
      required: true
    }
  },
  emits: ['navigate-to-book'],
  setup(props) {
    const currentSort = ref('title')
    const currentView = ref('list')

    const sortOptions = computed(() => {
      const options = [
        { value: 'title', label: 'Title', icon: 'fa-sort-alpha-down' },
        { value: 'author', label: 'Author', icon: 'fa-user' }
      ]
      if (props.tab === 'reading' || props.tab === 'read') {
        options.push({ value: 'progress', label: 'Progress', icon: 'fa-tasks' })
      }
      if (props.tab === 'read') {
        options.push({ value: 'dateRead', label: 'Date Read', icon: 'fa-calendar-alt' })
      }
      return options
    })

    const viewOptions = [
      { value: 'compact', icon: 'fa-bars' },
      { value: 'list', icon: 'fa-list' },
      { value: 'grid', icon: 'fa-th-large' }
    ]

    const sortBooks = (books) => {
      return [...books].sort((a, b) => {
        switch (currentSort.value) {
          case 'title':
            return (a.displayName || a.title).localeCompare(b.displayName || b.title)
          case 'author':
            return a.author.localeCompare(b.author)
          case 'progress':
            return (b.progress || 0) - (a.progress || 0)
          case 'dateRead':
            return new Date(b.dateRead || 0) - new Date(a.dateRead || 0)
          default:
            return 0
        }
      })
    }

    const sortedRegularBooks = computed(() => sortBooks(props.regularBooks))
    const sortedComicBooks = computed(() => sortBooks(props.comicBooks))

    const getUniqueKey = (book) => {
      return book.isbn || `${book.title}-${book.author}`
    }

    const changeView = (newView) => {
      currentView.value = newView
    }

    return {
      currentSort,
      currentView,
      sortOptions,
      viewOptions,
      sortedRegularBooks,
      sortedComicBooks,
      getUniqueKey,
      changeView
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

h2 {
  margin-top: var(--spacing-large);
  margin-bottom: var(--spacing-medium);
  color: var(--highlight-color);
}

.book-list + h2 {
  margin-top: var(--spacing-large);
}
</style>
