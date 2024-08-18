<!-- src/components/Sidebar.vue -->
<template>
  <div class="sidebar-container" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar">
      <nav>
        <ul>
          <li>
            <router-link to="/" exact-active-class="active">
              <img src="@/assets/about.svg" alt="About" class="nav-icon" /> About
            </router-link>
          </li>
          <li>
            <router-link to="/skills" active-class="active">
              <img src="@/assets/skills.svg" alt="Skills" class="nav-icon" /> Skills
            </router-link>
          </li>
          <li>
            <router-link to="/books" active-class="active">
              <img src="@/assets/books.svg" alt="Books" class="nav-icon" /> Books
            </router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">
              <img src="@/assets/write.svg" alt="Blog" class="nav-icon" /> Blog
            </router-link>
          </li>
          <li>
            <router-link to="/research" active-class="active">
              <img src="@/assets/arxiv.svg" alt="Research" class="nav-icon" /> Research
            </router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">
              <img src="@/assets/contact.svg" alt="Contact" class="nav-icon" /> Contact
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="theme-toggle">
        <button @click="toggleTheme">
          <img :src="currentThemeIcon" :alt="isDarkMode ? 'Light Mode' : 'Dark Mode'" class="nav-icon" />
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'SidebarMenu',
  setup() {
    const store = useStore()

    const isOpen = computed(() => store.state.content.sidebarOpen)
    const isDarkMode = computed(() => store.state.theme.isDarkMode)

    const currentThemeIcon = computed(() => 
      isDarkMode.value ? require('@/assets/sun.svg') : require('@/assets/moon.svg')
    )

    const toggleTheme = () => {
      store.dispatch('theme/toggleTheme')
    }

    return {
      isOpen,
      isDarkMode,
      currentThemeIcon,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.sidebar-container {
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  width: 250px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 999;
}

.sidebar-container.sidebar-open {
  transform: translateX(0);
}

.sidebar {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

nav {
  flex-grow: 1;
  overflow-y: auto;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li a {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s;
}

nav ul li a:hover {
  background-color: #e0e0e0;
}

nav ul li a.active {
  background-color: #d0d0d0;
  font-weight: bold;
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-right: 15px;
}

.theme-toggle {
  padding: 15px 20px;
  border-top: 1px solid #ddd;
}

.theme-toggle button {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
}

.theme-toggle button:hover {
  background-color: #e0e0e0;
}

/* Dark mode styles */
:root.dark-mode .sidebar {
  background-color: #333;
}

:root.dark-mode nav ul li a {
  color: #f5f5f5;
}

:root.dark-mode nav ul li a:hover {
  background-color: #444;
}

:root.dark-mode nav ul li a.active {
  background-color: #555;
}

:root.dark-mode .theme-toggle {
  border-top-color: #444;
}

:root.dark-mode .theme-toggle button {
  color: #f5f5f5;
}

:root.dark-mode .theme-toggle button:hover {
  background-color: #444;
}

@media (max-width: 768px) {
  .sidebar-container {
    width: 100%;
  }
}
</style>