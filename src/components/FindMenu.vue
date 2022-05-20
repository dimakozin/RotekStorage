<template>
    <p class="control">
          <div class="dropdown is-active dropdown-block">
            <div class="dropdown-trigger">
                <div class="field">
                    <p class="control is-expanded has-icons-right">
                        <input class="input" type="search" 
                        @input="checkInput"
                        v-model="subjectTitle" placeholder="Введите объект поиска"/>
                    </p>
                </div>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu" 
            v-if="isShowDropdown" >
                <div class="dropdown-content">
                    <a class="dropdown-item" v-for="title in findByName(subjectTitle)"
                     @click="setTitle(title)"
                     v-bind:key="title">
                        {{title}}
                    </a>
                </div>
            </div>
          </div>
        </p>
</template>
<script>
import { Options, Vue } from 'vue-class-component';
import {mapGetters, mapActions} from 'vuex'
@Options({
  components: {  },
  props: {
    
  },
  mounted () {
    window.addEventListener('keydown', (ev) => {
      if(ev.key == 'Escape'){
        this.subjectTitle = ''
        this.dropActiveElement()
      }
    })
  },
  data () { 
    return {
        subjectTitle: "",
        isShowDropdown: false
    }
  },
  computed: {
      ...mapGetters({
          findByName: 'GET_BY_NAME',
          getActiveSections: 'GET_ACTIVE_SECTIONS'
      }),
   },
   methods: {
       ...mapActions(['setActiveElement', 'dropActiveElement']),
       setTitle (title ) {
           this.subjectTitle = title
           this.isShowDropdown = false
            this.setActiveElement({
                item: title,
                char: title[0]
            })
       },
       checkInput(ev) {
        if(ev instanceof Event && !(ev  instanceof InputEvent)){
          this.dropActiveElement()
          this.isShowDropdown = false
          console.log('here')
          return
        }
        
         if(!this.subjectTitle){
          this.isShowDropdown = false
          return
        } else {
          const findRes = this.findByName(this.subjectTitle)
          this.isShowDropdown = true
          if(findRes.length === 0) this.isShowDropdown = false
        }

       }
   },
})

export default class FindMenu extends Vue {
  
}
</script>
