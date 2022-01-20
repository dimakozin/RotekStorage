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
            v-if="findByName(subjectTitle).length !== 0 && subjectTitle != ''">
                <div class="dropdown-content">
                    <a class="dropdown-item" v-for="title in findByName(subjectTitle)"
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
import {mapGetters} from 'vuex'
@Options({
  components: {  },
  props: {
    
  },
  data () { return {
    subjectTitle: ""
    }
  },
  computed: {
      ...mapGetters({
          findByName: 'GET_BY_NAME'
      })
   },

})

export default class FindMenu extends Vue {
  
}
</script>
