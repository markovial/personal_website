<!-- src/views/Books.vue -->
<template>
  <div class="books">
    <h1>My Books</h1>
    <div v-for="book in books" :key="book.isbn" class="book-item">
      <img :src="book.image" :alt="book.title" class="book-cover">
      <div class="book-details">
        <h3>{{ book.title }}</h3>
        <p>Author: {{ book.author }}</p>
        <p>Added on: {{ formatDate(book.dateAdded) }}</p>
        <p>Shelf: {{ book.shelf }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Books',
  setup() {
    const store = useStore()
    const books = computed(() => store.getters['content/getBooks'])

    onMounted(() => {
      store.dispatch('content/loadBooks')
    })

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return {
      books,
      formatDate
    }
  }
}
</script>

<style scoped>
.books {
  padding: 20px;
}

.book-item {
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-cover {
  width: 100px;
  height: auto;
  margin-right: 20px;
}

.book-details {
  flex: 1;
}

h3 {
  margin-top: 0;
}
</style>