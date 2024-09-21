<!-- src/components/ActivityTab.vue -->
<template>
  <div class="activity-tab">
    <div class="controls">
      <div class="sort-options">
        <span>Sort:</span>
        <button 
          v-for="option in sortOptions" 
          :key="option.value"
          @click="currentSort = option.value"
          :class="{ active: currentSort === option.value }"
        >
          <i :class="['fas', option.icon]"></i> {{ option.label }}
        </button>
      </div>
      <div class="view-toggle">
        <span>View:</span>
        <button 
          v-for="view in viewOptions" 
          :key="view.value"
          @click="changeView(view.value)"
          :class="{ active: currentView === view.value }"
        >
          <i :class="['fas', view.icon]"></i>
        </button>
      </div>
    </div>

    <div :class="['activity-list', currentView + '-view']">
      <ActivityItem
        v-for="activity in sortedActivities"
        :key="activity.id"
        :activity="activity"
        :currentView="currentView"
        @click="$emit('navigate-to-activity', activity.id)"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ActivityItem from '@/components/ActivityItem.vue'

export default {
  name: 'ActivityTab',
  components: { ActivityItem },
  props: {
    tab: {
      type: String,
      required: true
    },
    activities: {
      type: Array,
      required: true
    }
  },
  emits: ['navigate-to-activity'],
  setup(props) {
    const currentSort = ref('date')
    const currentView = ref('list')

    const sortOptions = computed(() => {
      const options = [
        { value: 'name', label: 'Name', icon: 'fa-sort-alpha-down' },
        { value: 'date', label: 'Date', icon: 'fa-calendar-alt' },
      ]
      if (props.tab === 'hiking') {
        options.push({ value: 'elevation', label: 'Elevation', icon: 'fa-mountain' })
      }
      if (props.tab === 'running') {
        options.push({ value: 'distance', label: 'Distance', icon: 'fa-route' })
      }
      return options
    })

    const viewOptions = [
      { value: 'compact', icon: 'fa-bars' },
      { value: 'list', icon: 'fa-list' },
      { value: 'grid', icon: 'fa-th-large' }
    ]

    const sortActivities = (activities) => {
      return [...activities].sort((a, b) => {
        switch (currentSort.value) {
          case 'name':
            return a.name.localeCompare(b.name)
          case 'date':
            return new Date(b.date) - new Date(a.date)
          case 'elevation':
            return (b.elevation || 0) - (a.elevation || 0)
          case 'distance':
            return (b.distance || 0) - (a.distance || 0)
          default:
            return 0
        }
      })
    }

    const sortedActivities = computed(() => sortActivities(props.activities))

    const changeView = (newView) => {
      currentView.value = newView
    }

    return {
      currentSort,
      currentView,
      sortOptions,
      viewOptions,
      sortedActivities,
      changeView
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';
</style>
