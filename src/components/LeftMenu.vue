<template>
    <div class="leftMenu">
      <aside class="menu">
       <p class="menu-label">
          Список
        </p>
          <li>
            <a class="is-active">А</a>
            <ul>
              <li><a>Авторучка</a></li>
              <li><a>Автомобиль</a></li>
            </ul>
          </li>
          <li>
            <a class="">М</a>
            <ul>
              <li><a>Молоток</a></li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapGetters} from 'vuex'

@Options({
  props: {
    
  },
  computed: {
      ...mapGetters({
          getAllSorted: 'GET_ALL_SORTED_BY_NAME'
      }),
   },
})

export default class LeftMenu extends Vue {
  
}

</script>

<style lang="css">
.leftMenu {
  text-align: left;
}
</style>