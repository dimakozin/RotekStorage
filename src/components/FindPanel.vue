<template>
  <section class="hero is-link">
    <div class="hero-body">
      <div class="mobile-buttons is-hidden-desktop" id="docsToggles">
        <button class="button is-primary"
        @click="showLeftMenu()"
        >Показать алфавитный список</button>
      </div>
      <p class="title">
        Расположение товарно-материальных ценностей
      </p>
      <p class="title">
        <find-menu></find-menu>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FindMenu from './FindMenu.vue';
import {mapActions} from 'vuex'

@Options({
  components: { FindMenu },
  methods: {
    ...mapActions(['showLeftMenu']),
  }
})

export default class FindPanel extends Vue {
  
}

</script>

<style lang="css">

.dropdown-block{
    display: block !important;
}
</style>