<!-- src/components/ActivityItem.vue -->
<template>
  <div class="item-card" :class="currentView">
    <template v-if="currentView === 'compact'">
      <div class="item-content">
        <p class="item-title">{{ truncateTitle(activity.name) }}</p>
        <p class="item-subtitle">{{ activity.type }}</p>
      </div>
    </template>
    
    <template v-else>
      <div class="item-image-container">
        <div class="item-image-placeholder">
          <i :class="['fas', getActivityIcon(activity.type)]"></i>
        </div>
      </div>
      <div class="item-details">
        <h3 class="item-title">{{ activity.name }}</h3>
        <p class="item-subtitle">{{ activity.type }}</p>
        <p class="item-date">Date: {{ formatDate(activity.date) }}</p>
        <p v-if="activity.elevation" class="item-elevation">Elevation: {{ activity.elevation }}m</p>
        <p v-if="activity.distance" class="item-distance">Distance: {{ activity.distance }}km</p>
        <p v-if="activity.difficulty" class="item-difficulty">Difficulty: {{ activity.difficulty }}</p>
        <p v-if="activity.progression" class="item-progression">Progression: {{ activity.progression }}</p>
        <p class="item-location">Location: {{ activity.location }}</p>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  name: 'ActivityItem',
  props: {
    activity: {
      type: Object,
      required: true
    },
    currentView: {
      type: String,
      default: 'list'
    }
  },
  setup() {
    const getActivityIcon = (type) => {
      const iconMap = {
        hiking: 'fa-hiking',
        running: 'fa-running',
        calisthenics: 'fa-dumbbell'
      }
      return iconMap[type] || 'fa-question'
    }

    const truncateTitle = (title) => {
      return title.length > 40 ? title.substring(0, 37) + '...' : title
    }

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString()
    }

    return {
      getActivityIcon,
      truncateTitle,
      formatDate
    }
  }
}
</script>

<style scoped>
@import '../assets/css/tab-view-styles.css';

.item-date,
.item-elevation,
.item-distance,
.item-difficulty,
.item-progression,
.item-location {
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
  margin: 0 0 var(--spacing-small) 0;
}
</style>
