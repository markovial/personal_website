<!-- src/components/BookItem.vue -->
<template>
  <div class="item-card" :class="currentView">
    <template v-if="currentView === 'compact'">
      <div class="item-content">
        <p class="item-title">{{ truncateTitle(book.displayName || book.title) }}</p>
        <p class="item-subtitle">{{ book.author || 'No author' }}</p>
      </div>
      <div v-if="book.progress > 0 && book.progress < 100" class="progress-container">
        <div class="progress-bar">
          <div class="progress" :style="progressStyle"></div>
        </div>
        <span class="progress-text">{{ book.progress }}%</span>
      </div>
    </template>
    
    <template v-else>
      <div class="item-image-container">
        <img v-if="book.image" :src="book.image" :alt="book.displayName + ' cover'" class="item-image">
        <div v-else class="item-image-placeholder">
          <font-awesome-icon :icon="['fas', 'book']" />
        </div>
      </div>
      <div class="item-details">
        <div class="item-title-container">
          <span class="item-title">{{ book.displayName || book.title }}</span>
          <a v-if="book.readOnline" :href="book.readOnline" target="_blank" class="read-online-link" title="Read Online">
            <font-awesome-icon :icon="['fas', 'book-open']" />
          </a>
        </div>
        <div class="item-subtitle">{{ book.author || 'No author' }}</div>
        <div v-if="currentView === 'list' && book.artist" class="item-artist">{{ book.artist }}</div>
        <div v-if="book.dateRead" class="completion-date">
          Completed on: {{ formatDate(book.dateRead) }}
        </div>
        <div v-if="book.progress > 0 " class="progress-container">
          <div class="progress-bar">
            <div class="progress" :style="progressStyle"></div>
          </div>
          <span class="progress-text">{{ book.progress }}%</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from 'vue';

export default {
  name: 'BookItem',
  props: {
    book: {
      type: Object,
      required: true
    },
    currentView: {
      type: String,
      default: 'compact'
    }
  },
  setup(props) {
    const animationTriggered = ref(false);
    
    const progressStyle = computed(() => ({
      width: animationTriggered.value ? `${props.book.progress}%` : '0%',
      transition: 'width 1s ease-out'
    }));

    const triggerAnimation = () => {
      animationTriggered.value = false;
      setTimeout(() => {
        animationTriggered.value = true;
      }, 50);
    };

    onMounted(triggerAnimation);

    watch(() => props.currentView, triggerAnimation);

    const formatDate = (dateString) => {
      if (!dateString) return 'Not available';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const truncateTitle = (title) => {
      return title.length > 40 ? title.substring(0, 37) + '...' : title;
    };

    return {
      progressStyle,
      formatDate,
      truncateTitle
    };
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

.item-image-container {
  position: relative;
  overflow: hidden;
}

.item-image-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 3px solid black;
  border-radius: 0px 20px 20px 0px;
  pointer-events: none;
}

img {
  filter: grayscale(100%);
  border-radius: 0px 20px 20px 0px;

}

.item-title-container {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-small);
}

.item-title {
  font-size: var(--font-size-normal);
  font-weight: bold;
  margin-right: var(--spacing-small);
}

.read-online-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--highlight-color);
  transition: color 0.3s ease;
  font-size: 0.8em;
}

.read-online-link:hover {
  color: var(--text-color);
}

.list-view .item-card {
  display: flex;
  margin-bottom: var(--spacing-medium);
}

.list-view .item-image-container {
  width: 100px;
  height: 150px;
  margin-right: var(--spacing-medium);
}

.list-view .item-details {
  flex: 1;
}

.list-view .item-artist {
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
  margin-bottom: var(--spacing-small);
}

.grid-view .item-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.grid-view .item-image-container {
  width: 100%;
  padding-bottom: 150%;
  position: relative;
}

.grid-view .item-image-container img,
.grid-view .item-image-container .item-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-view .item-details {
  padding: var(--spacing-small);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.item-subtitle {
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
  margin-bottom: var(--spacing-small);
}

.completion-date {
  font-size: var(--font-size-small);
  color: var(--highlight-color);
  margin: var(--spacing-small) 0;
}

.progress-container {
  margin-top: auto;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: var(--progress-bar-background);
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: var(--progress-bar-foreground);
}

.progress-text {
  font-size: var(--font-size-small);
  margin-top: var(--spacing-small);
}
</style>
