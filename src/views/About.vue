<!-- src/views/About.vue -->
<template>
  <div class="about">
    <h1>About Me</h1>
    <p>{{ aboutContent }}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'About',
  setup() {
    const store = useStore()
    const aboutContent = computed(() => store.getters['content/getAboutContent'])

    return {
      aboutContent
    }
  }
}
</script>