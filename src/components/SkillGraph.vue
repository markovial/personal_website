// src/components/SkillGraph.vue
<template>
  <div class="skill-graph" :style="{ '--depth': depth }">
    <div class="skills-container">
      <div v-for="skill in skills" :key="skill.id" class="skill-node">
        <div 
          class="skill-content"
          :class="{ 'has-children': hasChildren(skill), 'is-locked': skill.locked }"
          @click="toggleSkill(skill)"
          :data-skill-id="skill.id"
        >
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span v-if="!skill.locked" class="skill-progress">{{ skill.progress }}%</span>
            <img v-else src="@/assets/icons/skills/locked.svg" alt="Locked" class="locked-icon" />
          </div>
          <div v-if="hasChildren(skill)" class="expand-icon">
            {{ skill.expanded ? '−' : '+' }}
          </div>
          <div 
            v-if="!skill.locked"
            class="skill-progress-bar" 
            :style="{ 
              width: `${skill.progress}%`, 
              backgroundColor: getProgressColor(skill.progress) 
            }"
          ></div>
        </div>
      </div>
    </div>
    <div v-for="skill in skills" :key="`sub-${skill.id}`">
      <div v-if="skill.expanded && skill.subskills" class="subskills">
        <SkillGraph
          :skills="skill.subskills"
          :depth="depth + 1"
          @toggle-skill="$emit('toggle-skill', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillGraph',
  props: {
    skills: {
      type: Array,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  emits: ['toggle-skill'],
  methods: {
    hasChildren(skill) {
      return skill.subskills && skill.subskills.length > 0
    },
    toggleSkill(skill) {
      if (!skill.locked) {
        this.$emit('toggle-skill', skill.id)
      }
    },
    getProgressColor(progress) {
      if (progress < 30) return '#FF6B6B'
      if (progress < 60) return '#FFD93D'
      return '#6BCB77'
    }
  }
}
</script>

<style scoped>
.skill-graph {
  padding-left: calc(var(--depth) * 20px);
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-node {
  width: 150px;
}

.skill-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  overflow: hidden;
}

.skill-content:hover {
  background-color: #e0e0e0;
  transform: translateY(-3px);
}

.skill-content.has-children {
  font-weight: bold;
}

.skill-content.is-locked {
  opacity: 0.7;
  cursor: not-allowed;
}

.skill-info {
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.skill-name {
  font-size: 14px;
  word-wrap: break-word;
}

.skill-progress {
  font-size: 12px;
  color: #666;
}

.locked-icon {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}

.expand-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 18px;
  z-index: 1;
}

.skill-progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  transition: width 0.3s ease;
}

.subskills {
  margin-top: 10px;
  margin-left: 20px;
}
</style>