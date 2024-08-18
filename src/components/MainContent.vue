<!-- src/components/MainContent.vue -->
<template>
  <main class="main-content" :class="{ 'sidebar-open': isSidebarOpen }">
    <router-view></router-view>
  </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainContent',
  setup() {
    const store = useStore()
    const isSidebarOpen = computed(() => store.state.content.sidebarOpen)

    return {
      isSidebarOpen
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 20px;
  margin-top: 60px;
  margin-left: 0;
  transition: margin-left 0.3s ease-in-out;
}

.main-content.sidebar-open {
  margin-left: 250px;
}

@media (max-width: 768px) {
  .main-content.sidebar-open {
    margin-left: 0;
  }
}
</style>