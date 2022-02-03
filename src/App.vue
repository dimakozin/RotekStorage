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
import axios from 'axios'

@Options({
  components: {
    LeftMenu, FindPanel, Boxes
  },
  methods: {
    ...mapActions(['dropActiveElement', 'setStorage']),
  },
  mounted () {
    window.addEventListener('keydown', (ev) => {
      this.dropActiveElement()
    })

    const GRAPHQLServerURL = 'http://localhost:3000/graphql'
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
          this.setStorage(storage)

    }).catch (error => {
      console.error(error)
    })

  }
})

export default class Home extends Vue {}
</script>


<style>
  @import "../public/bulma.min.css"
</style>