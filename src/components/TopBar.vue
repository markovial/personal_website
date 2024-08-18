<!-- src/components/TopBar.vue -->
<template>
  <div class="top-bar">
    <button class="hamburger-menu" @click="toggleSidebar">
      ☰
    </button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'TopBar',
  setup() {
    const store = useStore()

    const toggleSidebar = () => {
      store.dispatch('content/toggleSidebar')
    }

    return {
      toggleSidebar
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
  background-color: #f0f0f0;
  padding: 10px;
  z-index: 1000;
  height: 40px;
}

.hamburger-menu {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
</style>