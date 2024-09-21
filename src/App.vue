<!-- src/App.vue -->
<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <TopBar />
    <Sidebar />
    <MainContent />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TopBar from './components/TopBar.vue'
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Sidebar,
    MainContent
  },
  setup() {
    const store = useStore()
    const isDarkMode = computed(() => store.state.theme.isDarkMode)

    return {
      isDarkMode
    }
  }
}
</script>

<style>
@import './assets/css/theme.css';

body {
  font-family: var(--font-family-main);
  font-size: var(--font-size-base);
  color: var(--text-color);
  background-color: var(--background-color);
  margin: 0;
  padding: 0;
}

#app {
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-headings);
}

h1 { font-size: var(--font-size-h1); }
h2 { font-size: var(--font-size-h2); }
h3 { font-size: var(--font-size-h3); }

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
