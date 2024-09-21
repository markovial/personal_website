<!-- src/views/PhysicalActivities.vue -->
<template>
  <div class="physical-activities content-container">
    <div class="tabs-container">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        @click="currentTab = tab.key"
        :class="['tab-button', { active: currentTab === tab.key }]"
      >
        {{ tab.label }}
      </button>
    </div>
    <ActivityTab
      :tab="currentTab"
      :activities="filteredActivities"
      @navigate-to-activity="navigateToActivityDetails"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import ActivityTab from '@/components/ActivityTab.vue'

export default {
  name: 'PhysicalActivities',
  components: { ActivityTab },
  setup() {
    const store = useStore()
    const currentTab = ref('hiking')
    const allActivities = computed(() => store.getters['activities/getActivities'])

    const tabs = [
      { key: 'hiking', label: 'Hiking' },
      { key: 'running', label: 'Running' },
      { key: 'calisthenics', label: 'Calisthenics' }
    ]

    onMounted(() => {
      store.dispatch('activities/loadActivities')
    })

    const filteredActivities = computed(() => {
      return allActivities.value.filter(activity => activity.type === currentTab.value)
    })

    const navigateToActivityDetails = (id) => {
      console.log(`Navigating to activity details for ID: ${id}`)
      // Implement navigation logic here
    }

    return {
      currentTab,
      tabs,
      filteredActivities,
      navigateToActivityDetails
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

.physical-activities {
  padding: var(--spacing-medium);
}

.activities-title {
  margin-bottom: var(--spacing-large);
}
</style>
