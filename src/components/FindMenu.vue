<template>
    <p class="control">
          <div class="dropdown is-active dropdown-block">
            <div class="dropdown-trigger">
                <div class="field">
                    <p class="control is-expanded has-icons-right">
                        <input class="input" type="search" v-model="subjectTitle" placeholder="Введите объект поиска"/>
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
  data () { 
    return {
        subjectTitle: "",
    }
  },
  computed: {
      ...mapGetters({
          findByName: 'GET_BY_NAME'
      }),
      showDropdown () {
        let findRes = this.findByName(this.subjectTitle)
        if(this.subjectTitle == '') return false
        if(findRes.length === 0) return false
        if(findRes.length === 1 & findRes[0].toLowerCase() == this.subjectTitle.toLowerCase()) {
            this.setActiveElement({
                item: findRes[0],
                char: findRes[0][0]
            })
            return false
        } 

        return true
      }
   },
   methods: {
       ...mapActions(['setActiveElement']),
       setTitle (title ) {
           this.subjectTitle = title
       }
   },
})

export default class FindMenu extends Vue {
  
}
</script>
