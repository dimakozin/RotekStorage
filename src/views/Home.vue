<template>
  <div class="home">
    Хелловорд
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import LeftMenu from '@/components/LeftMenu.vue';


@Options({
  components: {
    LeftMenu
  },
})
export default class Home extends Vue {}
</script>
