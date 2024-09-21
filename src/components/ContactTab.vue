<!-- src/components/ContactTab.vue -->
<template>
  <div class="contact-tab">
    <div class="controls">
      <div class="view-toggle">
        <span>View:</span>
        <button 
          v-for="view in viewOptions" 
          :key="view.value"
          @click="currentView = view.value"
          :class="{ active: currentView === view.value }"
        >
          <i :class="['fas', view.icon]"></i>
        </button>
      </div>
    </div>

    <div class="contact-list">
      <div v-for="contact in contacts" :key="contact.name" class="contact-item">
        <div v-if="currentView === 'compact'" class="contact-compact">
          <component :is="contact.icon" class="contact-icon" />
          <span class="contact-name">{{ contact.title }}</span>
          <img :src="contact.image" :alt="contact.name + ' contact'" class="contact-image">
          <i v-if="contact.copyable" class="fas fa-copy copy-icon" @click="$emit('copy-to-clipboard', contact.value)"></i>
        </div>
        <div v-else-if="currentView === 'grid'" class="contact-grid">
          <h3>{{ contact.title }}</h3>
          <img :src="contact.qrCode" :alt="contact.name + ' QR Code'" class="qr-code-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ContactTab',
  props: {
    tab: {
      type: String,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    }
  },
  emits: ['copy-to-clipboard'],
  setup() {
    const currentView = ref('compact')

    const viewOptions = [
      { value: 'compact', icon: 'fa-bars' },
      { value: 'grid', icon: 'fa-th-large' }
    ]

    return {
      currentView,
      viewOptions
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

.contact-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--spacing-small);
}

.contact-name {
  font-weight: bold;
  margin-right: var(--spacing-small);
}

.contact-image {
  max-width: calc(100% - 150px);
  height: auto;
}

.copy-icon {
  cursor: pointer;
  color: var(--highlight-color);
  margin-left: auto;
}

.contact-grid {
  text-align: center;
}

.qr-code-image {
  max-width: 200px;
  height: auto;
  margin: var(--spacing-small) auto;
}

@media (max-width: 768px) {
  .contact-compact {
    flex-wrap: wrap;
  }
  
  .contact-image {
    max-width: calc(100% - 60px);
    margin-top: var(--spacing-small);
  }
  
  .copy-icon {
    margin-left: var(--spacing-small);
  }
}
</style>
