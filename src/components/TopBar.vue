<!-- src/components/TopBar.vue -->
<template>
  <div class="top-bar">
    <button class="hamburger-menu" @click="toggleSidebar">
      ☰
    </button>
    <h1 class="page-title">{{ currentPageTitle }}</h1>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'TopBar',
  setup() {
    const store = useStore()
    const route = useRoute()

    const toggleSidebar = () => {
      store.dispatch('content/toggleSidebar')
    }

    const currentPageTitle = computed(() => {
      return route.meta.title || ''
    })

    return {
      toggleSidebar,
      currentPageTitle
    }
  }
}
</script>

<style scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background-color);
  padding: 10px;
  z-index: 1000;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hamburger-menu {
  position: absolute;
  left: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.page-title {
  margin: 0;
  font-size: var(--font-size-h1);
  color: var(--text-color);
}
</style>
