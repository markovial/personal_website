// src/views/Skills.vue
<template>
  <div class="skills">
    <h1>My Skills</h1>
    <div class="skill-categories">
      <router-link 
        v-for="category in skillCategories" 
        :key="category.id" 
        :to="{ name: 'SkillCategory', params: { categoryId: category.id } }"
        class="category-link"
      >
        <div class="category-icon">{{ category.name.charAt(0) }}</div>
        <span>{{ category.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Skills',
  setup() {
    const store = useStore()
    const skillCategories = computed(() => store.getters['skills/getAllCategories'])
    return {
      skillCategories
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.skill-categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.category-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s, background-color 0.3s;
  width: 120px;
}

.category-link:hover {
  background-color: #e0e0e0;
  transform: translateY(-5px);
}

.category-icon {
  width: 60px;
  height: 60px;
  background-color: #3498db;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
}

.category-link span {
  text-align: center;
}
</style>