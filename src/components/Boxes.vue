<template>
      <section class="boxes">
        <div class="columns">
          <div class="column is-1"></div>
            <div class="column is-1 is-wall"></div>
              <div class="column is-main-container">
                          
              <div class="is-shelf"></div>
              <div class="is-overlap"></div>
      
              <div class="is-shelf">
                  <button class="button is-primary is-large modal-button is-box">
                      1
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box">
                      2
                  </button>

                  <button class="button is-primary is-large modal-button is-box">
                      3
                  </button>    
              </div>
      
              <div class="is-overlap"></div>
      
              <div class="is-shelf">
                  <button class="button is-primary is-large modal-button is-box">
                      4
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box">
                      5
                  </button>

                  <button class="button is-primary is-large modal-button is-box">
                      6
                  </button>    
              </div>
      
              <div class="is-overlap"></div>

              <div class="is-shelf"></div>
            </div>
          <div class="column is-1 is-wall"></div>
          <div class="column is-1"></div>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
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