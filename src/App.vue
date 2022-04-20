<template>
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
import {mapActions} from 'vuex'


@Options({
  components: {
    LeftMenu, FindPanel, Boxes
  },
  methods: {
    ...mapActions(['dropActiveElement', 'getRemoteStorage']),
  },
  mounted () {
    window.addEventListener('keydown', (ev) => {
      this.dropActiveElement()
    })

    this.getRemoteStorage()
    }
})

export default class Home extends Vue {}
</script>


<style>
  @import "../public/bulma.min.css";
  @import "../public/app.css";
</style>