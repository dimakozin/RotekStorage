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
                  @click="showBoxModal(1)">
                      1
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box"
                  @click="showBoxModal(2)">
                      2
                  </button>

                  <button class="button is-primary is-large modal-button is-box"
                  @click="showBoxModal(3)">
                      3
                  </button>    
              </div>
      
              <div class="is-overlap"></div>
      
              <div class="is-shelf">
                  <button class="button is-primary is-large modal-button is-box"
                  @click="showBoxModal(4)">
                      4
                  </button>
                  
                  <button class="button is-primary is-large modal-button is-box"
                  @click="showBoxModal(5)">
                      5
                  </button>

                  <button class="button is-primary is-large modal-button is-box"
                  @click="showBoxModal(6)">
                      6
                  </button>    
              </div>
      
              <div class="is-overlap"></div>

              <div class="is-shelf"></div>
            </div>
          <div class="column is-1 is-wall"></div>
          <div class="column is-1"></div>
        </div>

        <box-modal
        :boxId=boxId
        :items=items   
        />

    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BoxModal from '@/components/BoxModal.vue'
import {mapActions} from 'vuex'

@Options({
  data() {
      return {
        boxId: 1,
        items: []
      }
  },
  methods: {
      ...mapActions({
          showModal: 'showModal',
      }),
      showBoxModal (boxId: number) {
        this.boxId = boxId
        this.showModal()
      }
  },
  components: {BoxModal}
})

export default class Boxes extends Vue {
  
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