<template>
    <section class="racks">
        <div class="tabs is-centered">
            <a class="button"
            @click="convertData()">Экспорт в Excel</a>
            <a class="button" onclick="window.print()">🖨️</a>
            <ul>
                <router-link to="/first"
                v-bind:class="[ GET_ACTIVE_SECTIONS().includes(1) ? 'is-active-section' : '' ]"
                >Первый стеллаж</router-link>
                <router-link to="/second"
                    v-bind:class="[ GET_ACTIVE_SECTIONS().includes(2) ? 'is-active-section' : '' ]"
                >Второй стеллаж</router-link>
                <router-link to="/third"
                    v-bind:class="[ GET_ACTIVE_SECTIONS().includes(3) ? 'is-active-section' : '' ]"
                >Третий стеллаж</router-link>
                <router-link to="/fourth"
                    v-bind:class="[ GET_ACTIVE_SECTIONS().includes(4) ? 'is-active-section' : '' ]"
                >Четвертый стеллаж</router-link>
                <router-link to="/fifth"
                    v-bind:class="[ GET_ACTIVE_SECTIONS().includes(5) ? 'is-active-section' : '' ]"
                >Пятый стеллаж</router-link>
                <router-link to="/sixth"
                    v-bind:class="[ GET_ACTIVE_SECTIONS().includes(6) ? 'is-active-section' : '' ]"
                >Шестой стеллаж</router-link>
                <router-link to="/">Помощь</router-link>
            </ul>
        </div>
        <div class="rack-view">
            <router-view></router-view>
        </div>
    </section>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import BoxModal from '@/components/BoxModal.vue'
import {mapActions, mapGetters} from 'vuex'

@Options({
  data() {
      return {
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
      },
      getRackData () {
            switch(this.$route.name ?? "all"){
                case "firstRack": 
                    return this.$store.getters.GET_BY_SECTION(1)
                case "secondRack": 
                    return this.$store.getters.GET_BY_SECTION(2)
                case "thirdRack": 
                    return this.$store.getters.GET_BY_SECTION(3)
                case "fourthRack": 
                    return this.$store.getters.GET_BY_SECTION(4)
                case "fifthRack": 
                    return this.$store.getters.GET_BY_SECTION(5)
                case "sixthRack": 
                    return this.$store.getters.GET_BY_SECTION(6)
                default:
                    return this.$store.getters.GET_ALL_SUBJECTS
            }
      },
      convertData () {
            // @ts-ignore
            this.$convertToExcel(XLSX, this.getRackData())
      }
  },
  components: {BoxModal}
})

export default class Boxes extends Vue {
  
}

</script>

<style lang="css">

.racks{
    padding-top: 25px;
    padding-bottom: 15px;
    overflow: auto;
    overflow-y:hidden;
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

a.is-active {
    border-bottom-color: #485fc7 !important;
    color: #485fc7 !important;
}

a.is-active-section {
    border: 1px solid red !important;
    color: red !important;
}

.print-container {
    visibility: hidden;
}

@media print {
    body {
        visibility: hidden;
    }

    .print-container {
        visibility: visible;
    }
}

</style>