import { createStore } from 'vuex'

export default createStore({
  state: {
    leftMenu: {
      activeChar: null,
      activeItem: null,
      isHidden: true
    },
    showModal: false,
    subjects: [
      {
        id: 1,
        title: 'Лист Д16 3000х1200х10',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 2,
        title: 'Лист АМГ5 800х830х8',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 3,
        title: 'Лист АМГ14 1020х310х14',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 4,
        title: 'Лист Сталь3 1600х700х4',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 5,
        title: 'Лист АМГ 3000х1500х6',
        section: 2,
        amount: 2,
        boxId: 'Г4'
      },
      {
        id: 6,
        title: 'Лист Поликарбонат 2190х1600х8',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 7,
        title: 'Лист МДФ 2000х1600х30',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 8,
        title: 'Лист МДФ 1120х1250х30',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 9,
        title: 'Лист Д16АТ 3000х1500х3',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 10,
        title: 'Лист МДФ 1120х1250х30',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 11,
        title: 'Лист МДФ 3000х1500х3',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 12,
        title: 'Лист Д16АТ 3000х1500х3',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 13,
        title: 'Лист Д16АТ 3000х1500х2',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 14,
        title: 'Лист Д16АТ 3000х1500х2',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 15,
        title: 'Лист Д16АТ 3000х1500х4',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 16,
        title: 'Лист Д16АТ 2600х1500х1,5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 17,
        title: 'Полиетилен черный 3000х1500х20',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 18,
        title: 'Полиетилен черный 1030х1332х20',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 19,
        title: 'Текстолит ПТК-5 1020х540х7',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 20,
        title: 'Текстолит ПТК-5 930х1570х5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 21,
        title: 'Текстолит ПТК-5 1150х1030х5',
        section: 2,
        amount: 5,
        boxId: 'Г4'
      },
      {
        id: 22,
        title: 'Текстолит ПТК-5 930х1570х5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 23,
        title: 'Лист АМГ-2 3000х1200х1',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 24,
        title: 'Лист АМГ 3000х1500х3',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 25,
        title: 'Уголок алюминиевый 3м 12х12х1,5',
        section: 2,
        amount: 25,
        boxId: 'Г4'
      },
      {
        id: 26,
        title: 'Уголок алюминиевый 1м 15х15х1,5',
        section: 2,
        amount: 6,
        boxId: 'Г4'
      },
      {
        id: 27,
        title: 'Швелер 3м 100х50х5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 28,
        title: 'Швелер 3м 80х40х5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 29,
        title: 'Швелер 3м 60х40х5',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 30,
        title: 'Труба АД-31 3м 100х3',
        section: 2,
        amount: 7,
        boxId: 'Г4'
      },
      {
        id: 31,
        title: 'Труба 590 160х10',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 32,
        title: 'Труба Д16Т 100х470',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 33,
        title: 'Профиль 3м 600х40х3',
        section: 2,
        amount: 2,
        boxId: 'Г4'
      },
      {
        id: 34,
        title: 'Круг Д16Т 450х80',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 35,
        title: 'Круг Д16Т 2500х70',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 36,
        title: 'Круг Д16Т 3000х60',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 37,
        title: 'Круг Д16Т 3000х35',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 38,
        title: 'Круг Д16Т 3000х30',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 39,
        title: 'Круг Д16Т 3000х20',
        section: 2,
        amount: 6,
        boxId: 'Г4'
      },
      {
        id: 40,
        title: 'Труба Д16Т 60х40х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 41,
        title: 'Труба Д16Т 40х2,5х1400',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 42,
        title: 'Труба Д16Т 40х2,5х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 43,
        title: 'Труба Д16Т 20х1,5х690',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 44,
        title: 'Труба Д16Т 80х3х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 45,
        title: 'Труба Д16Т 40х2,5х1400',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 46,
        title: 'Труба Сталь3 60х4х3000',
        section: 2,
        amount: 6,
        boxId: 'Г4'
      },
      {
        id: 47,
        title: 'Швелер Сталь3 80х40х3000',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 48,
        title: 'Труба Сталь3 65х35х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 49,
        title: 'Швелер Д16Т 50х30х3000',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 50,
        title: 'Угол 50х50х4х3000',
        section: 2,
        amount: 2,
        boxId: 'Г4'
      },
      {
        id: 51,
        title: 'Угол 45х45х4',
        section: 2,
        amount: 5,
        boxId: 'Г4'
      },
      {
        id: 52,
        title: 'Угол 40х40х4',
        section: 2,
        amount: 9,
        boxId: 'Г4'
      },
      {
        id: 53,
        title: 'Круг Сталь20 110х320',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 54,
        title: 'Круг Нержав 95х280',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 55,
        title: 'Круг Сталь20 110х150',
        section: 2,
        amount: 2,
        boxId: 'Г4'
      },
      {
        id: 56,
        title: 'Круг Сталь20 60х2000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 57,
        title: 'Круг Сталь20 70х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 58,
        title: 'Круг Сталь20 70х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 59,
        title: 'Круг Сталь20 105х440',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 60,
        title: 'Труба Сталь3 65х8х2000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 61,
        title: 'Труба Сталь3 64х13х2000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 62,
        title: 'Профиль Сталь3 50х50х870',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 63,
        title: 'Профиль Сталь3 120х120х3х3000',
        section: 2,
        amount: 3,
        boxId: 'Г4'
      },
      {
        id: 64,
        title: 'Труба Сталь3 160х160х3х3000',
        section: 2,
        amount: 1,
        boxId: 'Г4'
      },
      {
        id: 65,
        title: 'Полипропилен 1500х1500х8',
        section: 2,
        amount: 1,
        boxId: 'Г4'
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
    showLeftMenu(state) {
      state.leftMenu.isHidden = false
    },
    closeLeftMenu(state) {
      state.leftMenu.isHidden = true
    },
    addNewSubject(state, subject){ 
      state.subjects.push({
        id: 0,
        boxId: subject.boxId,
        title: subject.title,
        amount: 1,
        section: 1
      })
    },
    dropActiveElement(state){
      state.leftMenu.activeChar = null
      state.leftMenu.activeItem = null
    },
    deleteElement: (state, deletedSubject) => state.subjects = state.subjects.filter( item => item.id  !== deletedSubject.id )
  },
  actions: {
    showModal: (context) => context.commit('showModal'),
    closeModal: (context) => context.commit('closeModal'),
    setActiveElement: (context, payload) => context.commit('setActiveElement', payload),
    showLeftMenu: (context) => context.commit('showLeftMenu'),
    closeLeftMenu: (context) => context.commit('closeLeftMenu'),
    addNewSubject: (context, payload) => context.commit('addNewSubject', payload),
    dropActiveElement: (context) => context.commit('dropActiveElement'),
    deleteElement: (context, payload) => context.commit('deleteElement', payload)
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
    GET_BY_BOX_AND_SECTION: (state) => (boxId: string, section: number) => 
      state.subjects.filter(subject => subject.boxId === boxId && subject.section === section),
    GET_MODAL_STATE: (state) => state.showModal,
    GET_ACTIVE_MENU_PARAMS: (state) => { return {char: state.leftMenu.activeChar, item: state.leftMenu.activeItem}},
    GET_ACTIVE_BOXES: (state) => {
      let result = [] as Array<string>
      state.subjects.forEach( (el) => {
        if(el.title == state.leftMenu.activeItem) result.push(el.boxId)
      })
      return result
    },
    GET_LEFT_MENU_HIDDEN_STATUS: (state) => state.leftMenu.isHidden,
    GET_ACTIVE_SECTIONS: (state) => {
      let result = [] as Array<number>;
      state.subjects.forEach(subject => {
        if(subject.title == state.leftMenu.activeItem)
          if(!result.includes(subject.section)) result.push(subject.section)
      })

      return result
    }
  },
  }
)
