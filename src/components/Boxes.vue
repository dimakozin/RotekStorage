<template>
      <section class="racks">
        <div class="tabs is-centered">
            <ul>
                <router-link to="/first"
                v-bind:class="[ GET_ACTIVE_SECTIONS().includes(1) ? 'is-active-section' : '' ]"
                >Первая секция</router-link>
                <router-link to="/second"
                 v-bind:class="[ GET_ACTIVE_SECTIONS().includes(2) ? 'is-active-section' : '' ]"
                >Вторая секция</router-link>
                <router-link to="/third"
                 v-bind:class="[ GET_ACTIVE_SECTIONS().includes(3) ? 'is-active-section' : '' ]"
                >Третья секция</router-link>
                <router-link to="/fourth"
                 v-bind:class="[ GET_ACTIVE_SECTIONS().includes(4) ? 'is-active-section' : '' ]"
                >Четвертая секция</router-link>
                <router-link to="/fifth"
                 v-bind:class="[ GET_ACTIVE_SECTIONS().includes(5) ? 'is-active-section' : '' ]"
                >Пятая секция</router-link>
                <router-link to="/sixth"
                 v-bind:class="[ GET_ACTIVE_SECTIONS().includes(6) ? 'is-active-section' : '' ]"
                >Шестая секция</router-link>
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

export default class Boxes extends Vue {
  
}

</script>

<style lang="css">

.racks{
    padding-top: 25px;
    padding-bottom: 15px;
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

</style>