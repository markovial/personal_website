<!-- src/views/Skills.vue -->
<template>
  <div class="skills">
    <h1>My Skills</h1>
    <ul>
      <li v-for="skill in skills" :key="skill.id">
        {{ skill.name }} - {{ skill.level }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Skills',
  setup() {
    const store = useStore()
    const skills = computed(() => store.getters['content/getSkills'])

    return {
      skills
    }
  }
}
</script>