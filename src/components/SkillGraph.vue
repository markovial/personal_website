// src/components/SkillGraph.vue
<template>
  <div class="skill-graph" :style="{ '--depth': depth }">
    <div v-for="skill in skills" :key="skill.id" class="skill-node">
      <div 
        class="skill-content"
        :class="{ 'has-children': hasChildren(skill) }"
        @click="toggleSkill(skill)"
        :data-skill-id="skill.id"
      >
        <div class="skill-info">
          <span class="skill-name">{{ skill.name }}</span>
          <span class="skill-progress">{{ skill.progress }}%</span>
        </div>
        <div v-if="hasChildren(skill)" class="expand-icon">
          {{ skill.expanded ? '−' : '+' }}
        </div>
      </div>
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
      this.$emit('toggle-skill', skill.id)
    }
  }
}
</script>

<style scoped>
.skill-graph {
  padding-left: calc(var(--depth) * 20px);
}

.skill-node {
  margin-bottom: 10px;
}

.skill-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.skill-content:hover {
  background-color: #e0e0e0;
}

.skill-content.has-children {
  font-weight: bold;
}

.skill-info {
  display: flex;
  flex-direction: column;
}

.skill-name {
  font-size: 14px;
}

.skill-progress {
  font-size: 12px;
  color: #666;
}

.expand-icon {
  font-size: 18px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.subskills {
  margin-top: 10px;
}
</style>