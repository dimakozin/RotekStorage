<template>
  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">
        Расположение объектов на складе
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

@Options({
  components: { FindMenu },
  props: {

  }
})

export default class FindPanel extends Vue {
  msg!: string
}

</script>

<style lang="css">

.dropdown-block{
    display: block !important;
}
</style>