import { createStore } from 'vuex'
//import axios from 'axios'
//import offlineStorage from './offlineStorage'

const GRAPHQLServerURL = 'http://localhost:3000/graphql'
interface ISubject {
  id: any,
  boxId: any,
  title: any,
  amount: any,
  section: any
}

export default createStore({
  state: {
    leftMenu: {
      activeChar: null,
      activeItem: null,
      isHidden: true
    },
    showModal: false,
    isEdited: false as boolean,
    subjects: Array<any>(),
    printData: Array<any>(),
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
        state.subjects.push({
          title: subject.title,
          amount: subject.amount,
          section: subject.section,
          boxId: subject.boxId,
          comment: subject.comment
        })
        state.isEdited = true
    },
    addOne (state, id) {
        // TODO
        state.isEdited = true
    },
    removeOne (state, id) {
        // TODO
        state.isEdited = true
    },
    dropActiveElement(state){
      state.leftMenu.activeChar = null
      state.leftMenu.activeItem = null
    },
    deleteElement: (state, deletedSubject) => { 
      state.subjects = state.subjects.filter( item => 
        !(item.title == deletedSubject.title && 
        item.boxId  == deletedSubject.boxId &&
        item.section == deletedSubject.section) 
      )
      state.isEdited = true
    },
    getRemoteStorage: (state)  => {
      state.subjects = []
      // state.subjects = offlineStorage.subjects
    },
    dropEditedStatus: (state) => {state.isEdited = false},
    setPrintData: (state, data) => {state.printData = data},

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
    dropEditedStatus: (context) => context.commit('dropEditedStatus'),
    setPrintData: (context, payload) => context.commit('setPrintData', payload)
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
    },
    GET_BY_SECTION: (state) => (section: number) => {
      return state.subjects.filter(subj => subj.section == section)
    },
    GET_EDITED_STATUS: state => state.isEdited,
    GET_PRINT_DATA: state => state.printData,
  },
  }
)
