<template>
  <div class="columns">
    <div class="column is-1"></div>
      <div class="column is-1 is-wall is-hidden-mobile"></div>
        <div class="column is-main-container">
                    
        <div class="is-shelf"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :             
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А1')}"
            @click="showBoxModal('А1')">
                А1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А2')}"
            @click="showBoxModal('А2')">
                А2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А3')}"
            @click="showBoxModal('А3')">
                А3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А4')}"
            @click="showBoxModal('А4')">
                А4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А5')}"
            @click="showBoxModal('А5')">
                А5
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А6')}"
            @click="showBoxModal('А6')">
                А6
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А7')}"
            @click="showBoxModal('А7')">
                А7
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А8')}"
            @click="showBoxModal('А8')">
                А8
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А9')}"
            @click="showBoxModal('А9')">
                А9
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А10')}"
            @click="showBoxModal('А10')">
                А10
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('А11')}"
            @click="showBoxModal('А11')">
                А11
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :             
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б1')}"
            @click="showBoxModal('Б1')">
                Б1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б2')}"
            @click="showBoxModal('Б2')">
                Б2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б3')}"
            @click="showBoxModal('Б3')">
                Б3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б4')}"
            @click="showBoxModal('Б4')">
                Б4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б5')}"
            @click="showBoxModal('Б5')">
                Б5
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б6')}"
            @click="showBoxModal('Б6')">
                Б6
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б7')}"
            @click="showBoxModal('Б7')">
                Б7
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б8')}"
            @click="showBoxModal('Б8')">
                Б8
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б9')}"
            @click="showBoxModal('Б9')">
                Б9
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б10')}"
            @click="showBoxModal('Б10')">
                Б10
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Б11')}"
            @click="showBoxModal('Б11')">
                Б11
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
                        <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :             
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В1')}"
            @click="showBoxModal('В1')">
                В1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В2')}"
            @click="showBoxModal('В2')">
                В2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В3')}"
            @click="showBoxModal('В3')">
                В3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В4')}"
            @click="showBoxModal('В4')">
                В4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В5')}"
            @click="showBoxModal('В5')">
                В5
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В6')}"
            @click="showBoxModal('В6')">
                В6
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В7')}"
            @click="showBoxModal('В7')">
                В7
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В8')}"
            @click="showBoxModal('В8')">
                В8
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В9')}"
            @click="showBoxModal('В9')">
                В9
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В10')}"
            @click="showBoxModal('В10')">
                В10
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('В11')}"
            @click="showBoxModal('В11')">
                В11
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :             
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г1')}"
            @click="showBoxModal('Г1')">
                Г1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г2')}"
            @click="showBoxModal('Г2')">
                Г2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г3')}"
            @click="showBoxModal('Г3')">
                Г3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г4')}"
            @click="showBoxModal('Г4')">
                Г4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г5')}"
            @click="showBoxModal('Г5')">
                Г5
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г6')}"
            @click="showBoxModal('Г6')">
                Г6
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г7')}"
            @click="showBoxModal('Г7')">
                Г7
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г8')}"
            @click="showBoxModal('Г8')">
                Г8
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г9')}"
            @click="showBoxModal('Г9')">
                Г9
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г10')}"
            @click="showBoxModal('Г10')">
                Г10
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Г11')}"
            @click="showBoxModal('Г11')">
                Г11
            </button>
        </div>

        <div class="is-overlap"></div>


        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :             
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д1')}"
            @click="showBoxModal('Д1')">
                Д1
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д2')}"
            @click="showBoxModal('Д2')">
                Д2
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д3')}"
            @click="showBoxModal('Д3')">
                Д3
            </button>
            
            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' :
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д4')}"
            @click="showBoxModal('Д4')">
                Д4
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д5')}"
            @click="showBoxModal('Д5')">
                Д5
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д6')}"
            @click="showBoxModal('Д6')">
                Д6
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д7')}"
            @click="showBoxModal('Д7')">
                Д7
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д8')}"
            @click="showBoxModal('Д8')">
                Д8
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д9')}"
            @click="showBoxModal('Д9')">
                Д9
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д10')}"
            @click="showBoxModal('Д10')">
                Д10
            </button>

            <button class="button is-primary is-large modal-button is-box"
            :class="{'is-active-box' : 
            GET_ACTIVE_SECTIONS().includes(6) &
            GET_ACTIVE_BOXES().includes('Д11')}"
            @click="showBoxModal('Д11')">
                Д11
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
      ...mapGetters(['GET_ACTIVE_BOXES', 'GET_ACTIVE_SECTIONS']),
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