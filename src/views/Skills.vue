// src/views/Skills.vue
<template>
  <div class="skills">
    <h1>My Skills</h1>
    <div v-if="selectedCategory">
      <h2>{{ selectedCategory.name }}</h2>
      <button @click="deselectCategory">Back to Categories</button>
      <TreeSkillVisualization :key="selectedCategory.id" :categoryId="selectedCategory.id" />
    </div>
    <div v-else class="skill-categories">
      <div 
        v-for="category in skillCategories" 
        :key="category.id" 
        class="category-link"
        @click="selectCategory(category)"
      >
        <div class="category-icon">{{ category.name.charAt(0) }}</div>
        <span>{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import TreeSkillVisualization from '@/components/TreeSkillVisualization.vue'

export default {
  name: 'Skills',
  components: {
    TreeSkillVisualization
  },
  setup() {
    const store = useStore()
    const selectedCategory = ref(null)
    const skillCategories = computed(() => {
      const categories = store.getters['skills/getAllCategories']
      console.log('All categories:', JSON.stringify(categories, null, 2))
      return categories
    })

    const selectCategory = (category) => {
      console.log('Selected category:', JSON.stringify(category, null, 2))
      selectedCategory.value = category
    }

    const deselectCategory = () => {
      selectedCategory.value = null
    }

    return {
      skillCategories,
      selectedCategory,
      selectCategory,
      deselectCategory
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 20px;
}

.skill-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.category-link {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-icon {
  width: 50px;
  height: 50px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>