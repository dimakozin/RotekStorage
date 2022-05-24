<template>
  <section class="hero custom-hero">
    <div class="hero-body">
      <div class="left-panel">
        <img class="logo first-logo" src="/img/logos/red_logo1.png">
      </div>
      <div class="central-panel">
        <div class="mobile-buttons is-hidden-desktop" id="docsToggles">
          <button class="button is-primary"
          @click="showLeftMenu()"
          >Показать алфавитный список</button>
        </div>
        <p class="title custom-title">
          Расположение товарно-материальных ценностей
        </p>
        <p class="title">
          <find-menu></find-menu>
        </p>
      </div>
      <div class="right-panel">
        <img class="logo second-logo" src="/img/logos/red_logo2.png">
      </div>
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

.custom-hero{
  border: 12px solid #485fc7;
  margin-top: 10px;
  margin-right: 10px;
  background: radial-gradient(white, #485fc7);
}

.hero-body{
  display: flex;
  padding-left: 2% !important;
  padding-right: 3% !important  
}

.left-panel{
  display: grid;
  padding-right: 2%;
}

.central-panel{
  width: 100%;
}

.right-panel{
  padding-left: 3%
}

.logo{
  height: 107px;
  width: 170;
}

.first-logo{

}

.second-logo{

}

.dropdown-block{
    display: block !important;
}

.custom-title {
  text-align: center;
}
</style>