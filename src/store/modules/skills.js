// src/store/modules/skills.js

export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 1,
        name: 'Artificial Intelligence',
        progress: 0,
        subskills: [
          {
            id: 2,
            name: 'Machine Learning',
            progress: 75,
            locked: false,
            expanded: false,
            subskills: [
              {
                id: 3,
                name: 'Supervised Learning',
                progress: 80,
                locked: false,
                expanded: false,
                subskills: [
                  { id: 4, name: 'Classification', progress: 85, locked: false },
                  { id: 5, name: 'Regression', progress: 75, locked: false },
                  { id: 6, name: 'Support Vector Machines', progress: 70, locked: false }
                ]
              },
              {
                id: 7,
                name: 'Unsupervised Learning',
                progress: 70,
                locked: false,
                expanded: false,
                subskills: [
                  { id: 8, name: 'Clustering', progress: 75, locked: false },
                  { id: 9, name: 'Dimensionality Reduction', progress: 65, locked: false },
                  { id: 10, name: 'Anomaly Detection', progress: 60, locked: false }
                ]
              },
              {
                id: 11,
                name: 'Deep Learning',
                progress: 65,
                locked: false,
                expanded: false,
                subskills: [
                  { id: 12, name: 'Neural Networks', progress: 70, locked: false },
                  { id: 13, name: 'Convolutional Neural Networks', progress: 65, locked: false },
                  { id: 14, name: 'Recurrent Neural Networks', progress: 60, locked: false },
                  { id: 15, name: 'Generative Adversarial Networks', progress: 55, locked: false }
                ]
              }
            ]
          },
          {
            id: 16,
            name: 'Natural Language Processing',
            progress: 70,
            locked: false,
            expanded: false,
            subskills: [
              {
                id: 17,
                name: 'Text Processing',
                progress: 75,
                locked: false,
                expanded: false,
                subskills: [
                  { id: 18, name: 'Tokenization', progress: 100, locked: false },
                  { id: 19, name: 'Stemming', progress: 100, locked: false },
                  { id: 20, name: 'Lemmatization', progress: 100, locked: false }
                ]
              },
              {
                id: 21,
                name: 'Language Models',
                progress: 65,
                locked: false,
                expanded: false,
                subskills: [
                  { id: 22, name: 'N-gram Models', progress: 0, locked: true },
                  { id: 23, name: 'Neural Language Models', progress: 0, locked: true },
                  { id: 24, name: 'Transformer Models', progress: 55, locked: false }
                ]
              },
              { id: 25, name: 'Named Entity Recognition', progress: 0, locked: true },
              { id: 26, name: 'Sentiment Analysis', progress: 0, locked: true }
            ]
          },
          {
            id: 27,
            name: 'Computer Vision',
            progress: 60,
            locked: false,
            expanded: false,
            subskills: [
              { id: 28, name: 'Image Classification', progress: 65, locked: false },
              { id: 29, name: 'Object Detection', progress: 60, locked: false },
              { id: 30, name: 'Image Segmentation', progress: 55, locked: false },
              { id: 31, name: 'Face Recognition', progress: 50, locked: false }
            ]
          },
          {
            id: 32,
            name: 'Reinforcement Learning',
            progress: 55,
            locked: false,
            expanded: false,
            subskills: [
              { id: 33, name: 'Q-Learning', progress: 60, locked: false },
              { id: 34, name: 'Policy Gradients', progress: 50, locked: false },
              { id: 35, name: 'Deep Reinforcement Learning', progress: 45, locked: false }
            ]
          },
          {
            id: 36,
            name: 'AI Ethics',
            progress: 70,
            locked: false,
            expanded: false,
            subskills: [
              { id: 37, name: 'Bias in AI', progress: 75, locked: false },
              { id: 38, name: 'AI Safety', progress: 65, locked: false },
              { id: 39, name: 'Privacy Concerns', progress: 70, locked: false }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    updateSkillProgress(state, { categoryId, skillId, progress }) {
      const updateProgress = (skills) => {
        for (let skill of skills) {
          if (skill.id === skillId) {
            skill.progress = progress;
            return true;
          }
          if (skill.subskills && updateProgress(skill.subskills)) {
            skill.progress = calculateAverageProgress(skill.subskills);
            return true;
          }
        }
        return false;
      };

      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        updateProgress(category.subskills);
        category.progress = calculateAverageProgress(category.subskills);
      }
    },
    recalculateAllProgress(state) {
      const recalculateProgress = (skills) => {
        for (let skill of skills) {
          if (skill.subskills && skill.subskills.length > 0) {
            recalculateProgress(skill.subskills);
            skill.progress = calculateAverageProgress(skill.subskills);
          }
        }
      };

      for (let category of state.categories) {
        recalculateProgress(category.subskills);
        category.progress = calculateAverageProgress(category.subskills);
      }
    },
    toggleSkillLock(state, { categoryId, skillId }) {
      const toggleLock = (skills) => {
        for (let skill of skills) {
          if (skill.id === skillId) {
            skill.locked = !skill.locked;
            return true;
          }
          if (skill.subskills && toggleLock(skill.subskills)) {
            return true;
          }
        }
        return false;
      };

      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        toggleLock(category.subskills);
      }
    },
    toggleSkillExpanded(state, { categoryId, skillId }) {
      const toggleExpanded = (skills) => {
        for (let skill of skills) {
          if (skill.id === skillId) {
            skill.expanded = !skill.expanded;
            return true;
          }
          if (skill.subskills && toggleExpanded(skill.subskills)) {
            return true;
          }
        }
        return false;
      };

      const category = state.categories.find(c => c.id === categoryId);
      if (category) {
        toggleExpanded(category.subskills);
      }
    }
  },
  actions: {
    updateSkillProgress({ commit }, payload) {
      commit('updateSkillProgress', payload);
    },
    recalculateAllProgress({ commit }) {
      commit('recalculateAllProgress');
    },
    toggleSkillLock({ commit }, payload) {
      commit('toggleSkillLock', payload);
    },
    toggleSkillExpanded({ commit }, payload) {
      commit('toggleSkillExpanded', payload);
    }
  },
  getters: {
    getAllCategories: (state) => state.categories,
    getCategoryById: (state) => (id) => state.categories.find(c => c.id === parseInt(id)),
    getSkillById: (state) => (categoryId, skillId) => {
      const findSkill = (skills, id) => {
        for (let skill of skills) {
          if (skill.id === id) return skill;
          if (skill.subskills) {
            const subskill = findSkill(skill.subskills, id);
            if (subskill) return subskill;
          }
        }
        return null;
      };

      const category = state.categories.find(c => c.id === parseInt(categoryId));
      return category ? findSkill(category.subskills, parseInt(skillId)) : null;
    }
  }
};

// Helper function to calculate average progress
function calculateAverageProgress(skills) {
  if (skills.length === 0) return 0;
  const totalProgress = skills.reduce((sum, skill) => sum + skill.progress, 0);
  return Math.round(totalProgress / skills.length);
}