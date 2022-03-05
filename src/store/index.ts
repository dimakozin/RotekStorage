import { createStore } from 'vuex'
import axios from 'axios'

const GRAPHQLServerURL = 'http://localhost:3000/graphql'
interface ISubject {
  id: number,
  boxId: string,
  title: string,
  amount: number,
  section: number
}

export default createStore({
  state: {
    leftMenu: {
      activeChar: null,
      activeItem: null,
      isHidden: true
    },
    showModal: false,
    subjects: Array<ISubject>()
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
    showLeftMenu(state) {
      state.leftMenu.isHidden = false
    },
    closeLeftMenu(state) {
      state.leftMenu.isHidden = true
    },
    addNewSubject(state, subject){ 
      axios.post(GRAPHQLServerURL, {
        query: `mutation{
          addSubject(input:{
            title:"${subject.title}",
            section: 1,
            amount: 1,
            boxId:"${subject.boxId}"
            }
          ){
            id
          }
        }`}).then( response => {
            const storage = response.data.data.storage
            state.subjects = storage
          }).catch (error => {
            console.error(error)
          })
    },
    addOne (state, id) {
      axios.post(GRAPHQLServerURL, {
        query: `
        mutation{
          addOne(input: {
            id: ${id}
          }){
            id
          }
        }
        `}).catch (error => {
            console.error(error)
          })
    },
    removeOne (state, id) {
      axios.post(GRAPHQLServerURL, {
        query: `
        mutation{
          removeOne(input: {
            id: ${id}
          }){
            id
          }
        }
        `}).catch (error => {
            console.error(error)
          })
    },
    dropActiveElement(state){
      state.leftMenu.activeChar = null
      state.leftMenu.activeItem = null
    },
    deleteElement: (state, deletedSubject) => state.subjects = state.subjects.filter( item => item.id  !== deletedSubject.id ),
    getRemoteStorage: (state)  => {
      axios.post(GRAPHQLServerURL, {
        query: `query {
          storage{
            id
            title
            section
            amount
            boxId
          }}`}).then( response => {
            const storage = response.data.data.storage
            state.subjects = storage
          }).catch (error => {
            console.error(error)
          })
    },
  },
  actions: {
    showModal: (context) => context.commit('showModal'),
    closeModal: (context) => context.commit('closeModal'),
    setActiveElement: (context, payload) => context.commit('setActiveElement', payload),
    showLeftMenu: (context) => context.commit('showLeftMenu'),
    closeLeftMenu: (context) => context.commit('closeLeftMenu'),
    addNewSubject: (context, payload) => context.commit('addNewSubject', payload),
    dropActiveElement: (context) => context.commit('dropActiveElement'),
    deleteElement: (context, payload) => context.commit('deleteElement', payload),
    getRemoteStorage: (context, payload) => context.commit('getRemoteStorage', payload),
    addOne: (context, payload) => context.commit('addOne', payload),
    removeOne: (context, payload) => context.commit('removeOne', payload),
  },
  modules: {
  },
  getters: {
    GET_ALL_SUBJECTS: state => state.subjects,
    GET_BY_NAME: (state) => (name: string) => {
      if(!!state.subjects) {
        return state.subjects.filter(subject => subject.title?.toLowerCase()
        .includes(name?.toLowerCase()))
        .map(item => item.title)
        .filter((value, index, self) => self.indexOf(value) === index)
      } 
    },
    GET_ALL_UNIQUE_SORTED_BY_NAME: (state) => {

      interface ISortedObject {
        char: string,
        items: Array<string>
      }
        let result = [] as Array<ISortedObject>
        if(!!state.subjects){
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
  
        }
        return result.sort( (a,b) => {
          if(a.char > b.char) return 1
          else if(a.char == b.char) return 0
          else return -1
        })},
    GET_BY_BOX_AND_SECTION: (state) => (boxId: string, section: number) => {
      if(!!state.subjects){
        return state.subjects.filter(subject => subject.boxId === boxId && subject.section === section)
                .sort( (obj1, obj2) => {
                  if(obj1.title > obj2.title) return 1
                  if(obj1.title < obj2.title) return -1
                  return 0
                })
      } 
    },
    GET_MODAL_STATE: (state) => state.showModal,
    GET_ACTIVE_MENU_PARAMS: (state) => { return {char: state.leftMenu.activeChar, item: state.leftMenu.activeItem}},
    GET_ACTIVE_BOXES: (state) => {
      let result = [] as Array<string>
      if(!!state.subjects){
        state.subjects.forEach( (el) => {
          if(el.title == state.leftMenu.activeItem) result.push(el.boxId)
        })
      }
      return result
    },
    GET_LEFT_MENU_HIDDEN_STATUS: (state) => state.leftMenu.isHidden,
    GET_ACTIVE_SECTIONS: (state) => {
      let result = [] as Array<number>;
      if(!!state.subjects){
        state.subjects.forEach(subject => {
          if(subject.title == state.leftMenu.activeItem)
            if(!result.includes(subject.section)) result.push(subject.section)
        })
      }
      return result
    }
  },
  }
)
