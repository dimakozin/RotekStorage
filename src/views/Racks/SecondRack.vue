<template>
  <div class="columns">
    <div class="column is-1"></div>
      <div class="column is-1 is-wall is-hidden-mobile"></div>
        <div class="column is-main-container">
                    

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('А01')}"
                @click="showBoxModal('А01')">
                А01
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('А02')}"
                @click="showBoxModal('А02')">
                А02
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('А03')}"
                @click="showBoxModal('А03')">
                А03
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('А04')}"
                @click="showBoxModal('А04')">
                А04
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('А05')}"
                @click="showBoxModal('А05')">
                А05
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Б01')}"
                @click="showBoxModal('Б01')">
                Б01
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Б02')}"
                @click="showBoxModal('Б02')">
                Б02
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Б03')}"
                @click="showBoxModal('Б03')">
                Б03
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Б04')}"
                @click="showBoxModal('Б04')">
                Б04
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Б05')}"
                @click="showBoxModal('Б05')">
                Б05
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('В01')}"
                @click="showBoxModal('В01')">
                В01
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('В02')}"
                @click="showBoxModal('В02')">
                В02
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('В03')}"
                @click="showBoxModal('В03')">
                В03
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('В04')}"
                @click="showBoxModal('В04')">
                В04
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('В05')}"
                @click="showBoxModal('В05')">
                В05
            </button>
        </div>

        <div class="is-overlap"></div>

        <div class="is-shelf">
            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Г01')}"
                @click="showBoxModal('Г01')">
                Г01
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Г02')}"
                @click="showBoxModal('Г02')">
                Г02
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Г03')}"
                @click="showBoxModal('Г03')">
                Г03
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Г04')}"
                @click="showBoxModal('Г04')">
                Г04
            </button>

            <button class="button is-primary is-large modal-button is-box"
                :class="{'is-active-box' :
                GET_ACTIVE_SECTIONS().includes(2) &
                GET_ACTIVE_BOXES().includes('Г05')}"
                @click="showBoxModal('Г05')">
                Г05
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
        section: 2
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