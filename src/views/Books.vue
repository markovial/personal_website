<!-- src/views/Books.vue -->
<template>
  <div class="books content-container">
    <div class="tabs-container">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="currentTab = tab.key"
        :class="['tab-button', { active: currentTab === tab.key }]"
      >
        {{ tab.label }}
      </button>
    </div>
    <BookTab
      :tab="currentTab"
      :regularBooks="filteredRegularBooks"
      :comicBooks="filteredComicBooks"
      @navigate-to-book="navigateToBookDetails"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import BookTab from '@/components/BookTab.vue'

export default {
  name: 'Books',
  components: { BookTab },
  setup() {
    const store = useStore()
    const currentTab = ref('reading')
    const allBooks = computed(() => store.getters['content/getBooks'])

    const tabs = [
      { key: 'reading', label: 'Reading' },
      { key: 'read', label: 'Read' },
      { key: 'to-read', label: 'To Read' }
    ]

    onMounted(() => {
      store.dispatch('content/loadBooks')
    })



    const isComic = (book) => {
      const comicTags = ['manga', 'manwha', 'western-comic', 'young-comics', 'young-novels']
      return book.tags.some(tag => comicTags.includes(tag))
    }

    const filterBooks = (books, tabKey) => {
      switch (tabKey) {
        case 'reading':
          return books.filter(book => book.tags.includes('currently-reading'))
        case 'read':
          return books.filter(book => 
            !book.tags.includes('currently-reading') && 
            !book.tags.includes('to-read') && 
            !book.tags.includes('wtr')
          )
        case 'to-read':
          return books.filter(book => 
            book.tags.includes('to-read') || book.tags.includes('wtr')
          )
        default:
          return []
      }
    }

    const filteredRegularBooks = computed(() => {
      return filterBooks(allBooks.value.filter(book => !isComic(book)), currentTab.value)
    })

    const filteredComicBooks = computed(() => {
      return filterBooks(allBooks.value.filter(book => isComic(book)), currentTab.value)
    })

    const navigateToBookDetails = (isbn) => {
      console.log(`Navigating to book details for ISBN: ${isbn}`)
      // Implement navigation logic here
    }

    return {
      currentTab,
      tabs,
      filteredRegularBooks,
      filteredComicBooks,
      navigateToBookDetails
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

.books {
  padding: var(--spacing-medium);
}

.books-title {
  margin-bottom: var(--spacing-large);
}
</style>
