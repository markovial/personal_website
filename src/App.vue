<!-- src/App.vue -->
<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <TopBar />
    <SidebarMenu />
    <MainContent />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TopBar from './components/TopBar.vue'
import SidebarMenu from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    SidebarMenu,
    MainContent
  },
  setup() {
    const store = useStore()
    const isDarkMode = computed(() => store.state.isDarkMode)

    return {
      isDarkMode
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #f0f0f0;
}
</style>