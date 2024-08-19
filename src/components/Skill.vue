// src/components/Skill.vue
<template>
  <div class="skill" :class="{ 'skill--locked': skill.locked }" :data-skill-id="skill.id" @click="$emit('click')">
    <svg class="skill__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Background circle -->
      <circle cx="50" cy="50" r="45" fill="#e0e0e0" />
      <!-- Progress circle -->
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        :stroke="getColor(skill.progress)"
        stroke-width="10"
        :stroke-dasharray="`${skill.progress * 2.827}, 282.7`"
        transform="rotate(-90 50 50)"
      />
      <!-- Skill icon or first letter -->
      <text x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="#333">
        {{ skill.name.charAt(0) }}
      </text>
    </svg>
    <div class="skill__info">
      <h3>{{ skill.name }}</h3>
      <p v-if="!skill.locked" class="skill__progress-text">{{ skill.progress }}%</p>
      <p v-else class="skill__locked-message">Locked</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  props: {
    skill: {
      type: Object,
      required: true
    }
  },
  emits: ['click'],
  methods: {
    getColor(progress) {
      if (progress < 30) return '#FF6B6B'
      if (progress < 60) return '#FFD93D'
      return '#6BCB77'
    }
  }
}
</script>

<style scoped>
.skill {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.skill:hover {
  transform: scale(1.05);
}

.skill--locked {
  opacity: 0.5;
}

.skill__svg {
  width: 80px;
  height: 80px;
}

.skill__info {
  text-align: center;
  margin-top: 5px;
}

.skill__info h3 {
  margin: 0;
  font-size: 14px;
}

.skill__progress-text {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.skill__locked-message {
  margin: 0;
  font-size: 12px;
  color: #999;
  font-style: italic;
}
</style>