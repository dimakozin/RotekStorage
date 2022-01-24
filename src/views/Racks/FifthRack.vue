<template>
  <div class="columns">
    <div class="column is-1"></div>
      <div class="column is-1 is-wall is-hidden-mobile"></div>
        <div class="column is-main-container">
                    
        <div class="is-shelf"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(1)}"
            @click="showBoxModal(1)">
                А1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(2)}"
            @click="showBoxModal(2)">
                А2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(3)}"
            @click="showBoxModal(3)">
                А3
            </button>    

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(3)}"
            @click="showBoxModal(3)">
                А4
            </button>    

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(3)}"
            @click="showBoxModal(3)">
                А5
            </button>    
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(4)}"
            @click="showBoxModal(4)">
                Б1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(5)}"
            @click="showBoxModal(5)">
                Б2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Б3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Б4
            </button>

              <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Б5
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(4)}"
            @click="showBoxModal(4)">
                В1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(5)}"
            @click="showBoxModal(5)">
                В2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                В3
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(4)}"
            @click="showBoxModal(4)">
                В4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(4)}"
            @click="showBoxModal(4)">
                В5
            </button>    
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(4)}"
            @click="showBoxModal(4)">
                Г1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(5)}"
            @click="showBoxModal(5)">
                Г2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Г3
            </button>    

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Г4
            </button>  

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : GET_ACTIVE_BOXES().includes(6)}"
            @click="showBoxModal(6)">
                Г5
            </button>  
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf"></div>
      </div>
    <div class="column is-1 is-wall is-hidden-mobile"></div>
    <div class="column is-1"></div>
  
    <box-modal
  :boxId=boxId
  :items=items   
  />

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BoxModal from '@/components/BoxModal.vue'
import {mapActions, mapGetters} from 'vuex'

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
      ...mapGetters(['GET_ACTIVE_BOXES']),
      showBoxModal (boxId: number) {
        this.boxId = boxId
        this.showModal()
      }
  },
  components: {BoxModal}
})

export default class FirstRack extends Vue {
  
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

.is-active-box {
    background-color: red !important;
}

.is-wall {
    background-color: rgb(63, 63, 224) !important;
    width: 10px !important;
    margin-top: 120px
}

.is-shelf {
    display: flex;
    padding: 10px 10px 10px 10px !important
}

.is-overlap {
    background-color: rgb(175, 167, 167);
    height: 20px !important;
}

.is-main-container {
    padding: 0 0 0 0 !important;
}
</style>