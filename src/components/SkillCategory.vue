// src/components/SkillCategory.vue
<template>
  <div v-if="category" class="skill-category">
    <div class="navigation">
      <router-link :to="{ name: 'Skills' }" class="nav-button">
        Back
      </router-link>
      <button @click="navigateCategory(-1)" :disabled="!previousCategory" class="nav-button">
        Previous
      </button>
      <button @click="navigateCategory(1)" :disabled="!nextCategory" class="nav-button">
        Next
      </button>
    </div>
    <h2>{{ category.name }}</h2>
    <TreeSkillVisualization :categoryId="categoryId" />
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
import TreeSkillVisualization from './TreeSkillVisualization.vue'

export default {
  name: 'SkillCategory',
  components: {
    TreeSkillVisualization
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

    return {
      categoryId,
      category,
      previousCategory,
      nextCategory,
      navigateCategory
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
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
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