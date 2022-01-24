<template>
      <section class="racks">
        <div class="tabs is-centered">
            <ul>
                <router-link tag="li" to="/first">Первая секция</router-link>
                <router-link tag="li" to="/second">Вторая секция</router-link>
                <router-link tag="li" to="/third">Третья секция</router-link>
                <router-link tag="li" to="/fourth">Четвертая секция</router-link>
                <router-link tag="li" to="/fifth">Пятая секция</router-link>
                <router-link tag="li" to="/second">Шестая секция</router-link>
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
      ...mapGetters(['GET_ACTIVE_BOXES']),
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
</style>