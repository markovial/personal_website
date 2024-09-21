// src/store/modules/activities.js
export default {
  namespaced: true,
  state: {
    activities: []
  },
  mutations: {
    SET_ACTIVITIES(state, activities) {
      state.activities = activities
    }
  },
  actions: {
    async loadActivities({ commit }) {
      // Simulated API call
      const activities = [
        // Hiking/Mountaineering
        { id: 1, type: 'hiking', name: 'Mount Everest Base Camp', date: '2023-05-15', elevation: 5364, location: 'Nepal' },
        { id: 2, type: 'hiking', name: 'Kilimanjaro', date: '2022-08-10', elevation: 5895, location: 'Tanzania' },
        { id: 3, type: 'hiking', name: 'Mont Blanc', date: '2022-07-05', elevation: 4808, location: 'France/Italy' },
        { id: 4, type: 'hiking', name: 'Aconcagua', date: '2023-01-20', elevation: 6962, location: 'Argentina' },
        { id: 5, type: 'hiking', name: 'Matterhorn', date: '2021-09-03', elevation: 4478, location: 'Switzerland' },
        { id: 6, type: 'hiking', name: 'Mount Fuji', date: '2022-07-15', elevation: 3776, location: 'Japan' },
        { id: 7, type: 'hiking', name: 'Denali', date: '2023-06-10', elevation: 6190, location: 'Alaska, USA' },
        { id: 8, type: 'hiking', name: 'Annapurna Circuit', date: '2022-04-12', elevation: 5416, location: 'Nepal' },
        { id: 9, type: 'hiking', name: 'Inca Trail to Machu Picchu', date: '2021-10-25', elevation: 4215, location: 'Peru' },
        { id: 10, type: 'hiking', name: 'Torres del Paine Circuit', date: '2023-03-05', elevation: 1100, location: 'Chile' },

        // Running
        { id: 11, type: 'running', name: 'Boston Marathon', date: '2023-04-17', distance: 42.2, location: 'Boston, USA' },
        { id: 12, type: 'running', name: 'New York City Marathon', date: '2022-11-06', distance: 42.2, location: 'New York, USA' },
        { id: 13, type: 'running', name: 'Tokyo Marathon', date: '2023-03-05', distance: 42.2, location: 'Tokyo, Japan' },
        { id: 14, type: 'running', name: 'Berlin Marathon', date: '2022-09-25', distance: 42.2, location: 'Berlin, Germany' },
        { id: 15, type: 'running', name: 'Chicago Marathon', date: '2022-10-09', distance: 42.2, location: 'Chicago, USA' },
        { id: 16, type: 'running', name: 'London Marathon', date: '2023-04-23', distance: 42.2, location: 'London, UK' },
        { id: 17, type: 'running', name: 'Ultra-Trail du Mont-Blanc', date: '2022-08-26', distance: 171, location: 'Alps (France, Italy, Switzerland)' },
        { id: 18, type: 'running', name: 'Comrades Marathon', date: '2023-06-11', distance: 89, location: 'South Africa' },
        { id: 19, type: 'running', name: 'Badwater 135', date: '2022-07-11', distance: 217, location: 'Death Valley, USA' },
        { id: 20, type: 'running', name: 'Spartathlon', date: '2022-09-30', distance: 246, location: 'Greece' },

        // Calisthenics
        { id: 21, type: 'calisthenics', name: 'One-arm Pushup', date: '2023-06-01', difficulty: 'Advanced', progression: '10 reps' },
        { id: 22, type: 'calisthenics', name: 'Muscle-up', date: '2022-12-15', difficulty: 'Advanced', progression: '5 reps' },
        { id: 23, type: 'calisthenics', name: 'Human Flag', date: '2023-02-28', difficulty: 'Expert', progression: '10 seconds hold' },
        { id: 24, type: 'calisthenics', name: 'Planche', date: '2023-04-10', difficulty: 'Expert', progression: '5 seconds hold' },
        { id: 25, type: 'calisthenics', name: 'Front Lever', date: '2022-11-20', difficulty: 'Advanced', progression: '8 seconds hold' },
        { id: 26, type: 'calisthenics', name: 'Handstand Pushup', date: '2023-01-05', difficulty: 'Advanced', progression: '3 reps' },
        { id: 27, type: 'calisthenics', name: 'One-arm Pullup', date: '2023-03-18', difficulty: 'Expert', progression: '2 reps' },
        { id: 28, type: 'calisthenics', name: 'Back Lever', date: '2022-10-05', difficulty: 'Advanced', progression: '10 seconds hold' },
        { id: 29, type: 'calisthenics', name: 'L-Sit', date: '2022-09-01', difficulty: 'Intermediate', progression: '30 seconds hold' },
        { id: 30, type: 'calisthenics', name: 'Pistol Squat', date: '2022-08-15', difficulty: 'Intermediate', progression: '10 reps each leg' }
      ]
      commit('SET_ACTIVITIES', activities)
    }
  },
  getters: {
    getActivities: state => state.activities
  }
}
