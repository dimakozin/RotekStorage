<template>
  <print-page></print-page>
  <div class="columns">
    <left-menu></left-menu>    
    <div class="column" style="padding: 0 0 0 0">
      <find-panel></find-panel> 
      <boxes></boxes>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LeftMenu from '@/components/LeftMenu.vue'
import FindPanel from '@/components/FindPanel.vue';
import Boxes from '@/components/Boxes.vue';
import PrintPage from '@/components/PrintPage.vue';
import {mapActions, mapGetters} from 'vuex'


@Options({
  components: {
    LeftMenu, FindPanel, Boxes, PrintPage
  },
  methods: {
    ...mapActions(['dropActiveElement', 'getRemoteStorage']),
    ...mapGetters(['GET_EDITED_STATUS'])
  },
  mounted () {
    window.addEventListener('keydown', (ev) => {
      this.dropActiveElement()
    })

    this.getRemoteStorage()
    },
    created() {
        window.addEventListener('beforeunload', (event) => {
        if(this.GET_EDITED_STATUS()){
          event.preventDefault();
          event.returnValue = '';
        }
      });

    }
})

export default class Home extends Vue {}
</script>


<style>
  @import "../public/bulma.min.css";
  @import "../public/app.css";
</style>