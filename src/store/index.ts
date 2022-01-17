import { createStore } from 'vuex'

export default createStore({
  state: {
    subjects: [
      {
        id: 1,
        title: 'Молоток',
        boxId: 1
      },
      {
        id: 2,
        title: 'ПЛК',
        boxId: 2
      },
      {
        id: 3,
        title: 'Панель оператора Weintek',
        boxId: 2
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    ALL_SUBJECTS: state => state.subjects,
    FIND_BY_NAME: (state) => (name: string) => state.subjects.filter(subject => subject.title.includes(name))
  }
})
