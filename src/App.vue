<template>
  <div class="columns">
    <div class="column is-3">
      <left-menu></left-menu>
    </div>
    <div class="column">
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

@Options({
  components: {
    LeftMenu, FindPanel, Boxes
  },
})

export default class Home extends Vue {}
</script>


<style>
@import "../public/bulma.min.css"
</style>
