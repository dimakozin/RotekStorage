<template>
  <div class="columns">
    <div class="column is-1"></div>
      <div class="column is-1 is-wall is-hidden-mobile"></div>
        <div class="column is-main-container">
                    
        <div class="is-shelf"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('А1')}"
                @click="showBoxModal('А1')">
                А1
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('А2')}"
                @click="showBoxModal('А2')">
                А2
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('А3')}"
                @click="showBoxModal('А3')">
                А3
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('А4')}"
                @click="showBoxModal('А4')">
                А4
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('А5')}"
                @click="showBoxModal('А5')">
                А5
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Б1')}"
                @click="showBoxModal('Б1')">
                Б1
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Б2')}"
                @click="showBoxModal('Б2')">
                Б2
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Б3')}"
                @click="showBoxModal('Б3')">
                Б3
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Б4')}"
                @click="showBoxModal('Б4')">
                Б4
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Б5')}"
                @click="showBoxModal('Б5')">
                Б5
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('В1')}"
                @click="showBoxModal('В1')">
                В1
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('В2')}"
                @click="showBoxModal('В2')">
                В2
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('В3')}"
                @click="showBoxModal('В3')">
                В3
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('В4')}"
                @click="showBoxModal('В4')">
                В4
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('В5')}"
                @click="showBoxModal('В5')">
                В5
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Г1')}"
                @click="showBoxModal('Г1')">
                Г1
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Г2')}"
                @click="showBoxModal('Г2')">
                Г2
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Г3')}"
                @click="showBoxModal('Г3')">
                Г3
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Г4')}"
                @click="showBoxModal('Г4')">
                Г4
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Г5')}"
                @click="showBoxModal('Г5')">
                Г5
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
                        <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Д1')}"
                @click="showBoxModal('Д1')">
                Д1
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Д2')}"
                @click="showBoxModal('Д2')">
                Д2
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Д3')}"
                @click="showBoxModal('Д3')">
                Д3
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Д4')}"
                @click="showBoxModal('Д4')">
                Д4
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(5) &
                GET_ACTIVE_BOXES().includes('Д5')}"
                @click="showBoxModal('Д5')">
                Д5
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
  :section=section
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
        boxId: '',
        items: [],
        section: 4
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

export default class SecondRack extends Vue {
  
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