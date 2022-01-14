<template>
      <section class="boxes">
        <div class="columns">
          <div class="column is-1"></div>
            <div class="column is-1 is-wall"></div>
              <div class="column is-main-container">
                          
              <div class="is-shelf"></div>
              <div class="is-overlap"></div>
      
              <div class="is-shelf">
                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      1
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      2
                  </button>

                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      3
                  </button>    
              </div>
      
              <div class="is-overlap"></div>
      
              <div class="is-shelf">
                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      4
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      5
                  </button>

                  <button class="button is-primary is-large modal-button is-box"
                  @click="isModalOpen=true">
                      6
                  </button>    
              </div>
      
              <div class="is-overlap"></div>

              <div class="is-shelf"></div>
            </div>
          <div class="column is-1 is-wall"></div>
          <div class="column is-1"></div>
        </div>

        <div class="modal" v-bind:class="[isModalOpen ? 'is-active' : '' ]">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Modal title</p>
            <button class="delete" aria-label="close" @click="isModalOpen=false"></button>
            </header>
            <section class="modal-card-body">
                Some text
            </section>
            <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
            </footer>
        </div>
        </div>

    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
      return {
          isModalOpen: false
      }
  },
})

export default class Boxes extends Vue {
  msg!: string
}

</script>

<style lang="css">

.boxes{
    padding-top: 25px;
}

.is-box {
    width: 100% !important;
    height: 100px !important;
    background-color: burlywood !important;
    /* background-image: url('../img/cartoon.jpg'); */
    margin: 15px 10px 0px 10px;
}

.is-wall {
    background-color: darkgrey !important;
    width: 10px !important;
}

.is-shelf {
    display: flex;
    padding: 10px 10px 10px 10px !important
}

.is-overlap {
    background-color: darkgrey;
    height: 20px !important;
}

.is-main-container {
    padding: 0 0 0 0 !important;
}
</style>