<template>
  <div class="sidebar-container" :class="{ 'sidebar-open': isOpen }">
    <div class="sidebar">
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path" exact-active-class="active" @click="handleItemClick">
              <font-awesome-icon :icon="item.icon" class="nav-icon" />
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>
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

    const toggleTheme = () => {
      store.dispatch('theme/toggleTheme')
    }

    const handleItemClick = () => {
      if (window.innerWidth <= 768) {
        store.dispatch('content/setSidebarOpen', false)
      }
    }

    const menuItems = [
      { name: 'About', path: '/about', icon: 'user-circle' },
      { name: 'Books', path: '/books', icon: 'book' },
      { name: 'Writing', path: '/blog', icon: 'pen' },
      { name: 'Physical', path: '/activities', icon: 'dumbbell' },
      // { name: 'Research', path: '/research', icon: 'flask' },
      { name: 'Contact', path: '/contact', icon: 'envelope' }
    ]

    return {
      isOpen,
      toggleTheme,
      handleItemClick,
      menuItems
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
  transition: transform var(--transition-speed);
  z-index: 999;
}

.sidebar-container.sidebar-open {
  transform: translateX(0);
}

.sidebar {
  height: 100%;
  width: 100%;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li a {
  display: flex;
  align-items: center;
  padding: var(--spacing-medium);
  color: var(--text-color);
  transition: background-color var(--transition-speed);
}

nav ul li a:hover,
nav ul li a.active {
  background-color: var(--highlight-color);
  color: var(--background-color);
}

.nav-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--spacing-medium);
}

.theme-toggle {
  margin-top: auto;
  padding: var(--spacing-medium);
}

.theme-toggle button {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--spacing-small) 0;
  font-size: var(--font-size-base);
  font-family: var(--font-family-main);
}

.theme-toggle button:hover {
  background-color: var(--highlight-color);
  color: var(--background-color);
}

@media (max-width: 768px) {
  .sidebar-container {
    width: 100%;
  }
}
</style>
