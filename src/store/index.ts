import { createStore } from 'vuex'

export default createStore({
  state: {
    leftMenu: {
      activeChar: null,
      activeItem: null
    },
    showModal: false,
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
      },
      {
        id: 4,
        title: "Авторучка",
        boxId: 3
      },
      {
        id: 5,
        title: 'ПЛК',
        boxId: 1
      }
    ]
  },
  mutations: {
    showModal (state) {
      state.showModal = true
    },
    closeModal (state) {
      state.showModal = false
    },
    setActiveElement(state, element) {
      state.leftMenu.activeChar = element.char
      state.leftMenu.activeItem = element.item
    },

  },
  actions: {
    showModal: (context) => context.commit('showModal'),
    closeModal: (context) => context.commit('closeModal'),
    setActiveElement: (context, payload) => context.commit('setActiveElement', payload),
  },
  modules: {
  },
  getters: {
    GET_ALL_SUBJECTS: state => state.subjects,
    GET_BY_NAME: (state) => (name: string) => state.subjects.filter(subject => subject.title?.toLowerCase()
    .includes(name?.toLowerCase()))
    .map(item => item.title)
    .filter((value, index, self) => self.indexOf(value) === index),
    GET_ALL_UNIQUE_SORTED_BY_NAME: (state) => {

      interface ISortedObject {
        char: string,
        items: Array<string>
      }
        let result = [] as Array<ISortedObject>
        state.subjects.forEach(subject => {
          let firstChar = subject.title[0]
          let findByChar = result.find(item => item.char === firstChar)

          if(!!findByChar){
            // check unique
            if(!findByChar!.items.some( title => title == subject.title)){
              findByChar!.items.push(subject.title)
            }

          }
          else {
            result.push({
              char: firstChar,
              items: [ subject.title ]
            })
          }
        })
        return result.sort( (a,b) => {
          if(a.char > b.char) return 1
          else if(a.char == b.char) return 0
          else return -1
        })},
    GET_BY_BOX: (state) => (boxId: number) => state.subjects.filter(subject => subject.boxId === boxId),
    GET_MODAL_STATE: (state) => state.showModal,
    GET_ACTIVE_MENU_PARAMS: (state) => { return {char: state.leftMenu.activeChar, item: state.leftMenu.activeItem}},
    GET_ACTIVE_BOXES: (state) => {
      let result = [] as Array<number>
      state.subjects.forEach( (el) => {
        if(el.title == state.leftMenu.activeItem) result.push(el.boxId)
      })
      return result
    },
  },
  }
)
