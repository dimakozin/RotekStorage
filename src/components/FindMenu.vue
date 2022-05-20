<template>
    <p class="control">
          <div class="dropdown is-active dropdown-block">
            <div class="dropdown-trigger">
                <div class="field">
                    <p class="control is-expanded has-icons-right">
                        <input class="input" type="search" 
                        @input="test"
                        v-model="subjectTitle" placeholder="Введите объект поиска"/>
                    </p>
                </div>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu" 
            v-if="showDropdown" >
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
    }
  },
  computed: {
      ...mapGetters({
          findByName: 'GET_BY_NAME',
          getActiveSections: 'GET_ACTIVE_SECTIONS'
      }),
      showDropdown () {
        if(this.subjectTitle == '') return false

        const findRes = this.findByName(this.subjectTitle)
        
        if(findRes.length === 0) return false
        if(findRes.length === 1 & findRes[0].toLowerCase() == this.subjectTitle.toLowerCase()) {
            this.setActiveElement({
                item: findRes[0],
                char: findRes[0][0]
            })

        const activeSection = this.getActiveSections[0]
        let newRoute = ''

        switch(activeSection){
          case 1:
            newRoute = '/first'; break;
          case 2:
            newRoute = '/second'; break;
          case 3:
            newRoute = '/third'; break;
          case 4:
            newRoute = '/fourth'; break;
          case 5:
            newRoute = '/fifth'; break;
          case 6:
            newRoute = '/sixth'; break;
        }

        this.$router.push(newRoute)


            return false
        } 

        return true
      }
   },
   methods: {
       ...mapActions(['setActiveElement', 'dropActiveElement']),
       setTitle (title ) {
           this.subjectTitle = title
       },
       test(ev) {
         if(ev instanceof Event && !(ev  instanceof InputEvent)){
           this.dropActiveElement()
         }
       }
   },
})

export default class FindMenu extends Vue {
  
}
</script>
