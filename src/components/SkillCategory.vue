// src/components/SkillCategory.vue
<template>
  <div v-if="category" class="skill-category">
    <div class="navigation">
      <router-link :to="{ name: 'Skills' }" class="nav-button">
        ← Back to All Skills
      </router-link>
      <div class="category-nav">
        <button @click="navigateCategory(-1)" :disabled="!previousCategory" class="nav-button">
          ← Previous
        </button>
        <h2>{{ category.name }}</h2>
        <button @click="navigateCategory(1)" :disabled="!nextCategory" class="nav-button">
          Next →
        </button>
      </div>
    </div>
    <SkillGraph :skills="category.subskills || []" @toggle-skill="toggleSkill" />
  </div>
  <div v-else class="skill-category">
    <p>Category not found.</p>
    <router-link :to="{ name: 'Skills' }" class="nav-button">
      Back to All Skills
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import SkillGraph from './SkillGraph.vue'

export default {
  name: 'SkillCategory',
  components: {
    SkillGraph
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const categoryId = computed(() => parseInt(route.params.categoryId))
    const allCategories = computed(() => store.getters['skills/getAllCategories'])
    const currentIndex = computed(() => allCategories.value.findIndex(c => c.id === categoryId.value))
    
    const category = computed(() => store.getters['skills/getCategoryById'](categoryId.value))
    const previousCategory = computed(() => allCategories.value[currentIndex.value - 1])
    const nextCategory = computed(() => allCategories.value[currentIndex.value + 1])

    const navigateCategory = (direction) => {
      const newCategory = direction > 0 ? nextCategory.value : previousCategory.value
      if (newCategory) {
        router.push({ name: 'SkillCategory', params: { categoryId: newCategory.id } })
      }
    }

    const toggleSkill = (skillId) => {
      store.dispatch('skills/toggleSkillExpanded', { categoryId: categoryId.value, skillId })
    }

    return {
      category,
      previousCategory,
      nextCategory,
      navigateCategory,
      toggleSkill
    }
  }
}
</script>

<style scoped>
.skill-category {
  padding: 20px;
}

.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.category-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
}

h2 {
  text-align: center;
  margin: 0 20px;
}

.nav-button {
  background-color: #f0f0f0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: background-color 0.3s;
}

.nav-button:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>