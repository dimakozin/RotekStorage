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
    GET_ALL_SUBJECTS: state => state.subjects,
    FIND_BY_NAME: (state) => (name: string) => state.subjects.filter(subject => subject.title.includes(name)),
    GET_ALL_SORTED_BY_NAME: (state) => {
      interface ISorted {
        [first_char: string] : Array<string>
      }
      let sorted = {} as ISorted
      state.subjects.forEach(subject => {
        let first_char = subject.title[0]
          if(first_char in sorted){
            sorted[first_char].push(subject.title)
          } else {
            sorted[first_char] = [ subject.title ]
          }

          console.log(sorted)

          return sorted

      })
    }
  }
})
