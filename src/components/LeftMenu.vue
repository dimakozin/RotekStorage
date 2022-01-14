<template>
    <div class="leftMenu">
      <aside class="menu">
       <p class="menu-label">
          Список
        </p>

        <ul class="menu-list">
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

@Options({
  props: {
    msg: String
  }
})

export default class LeftMenu extends Vue {
  msg!: string
}

</script>

<style lang="css">
.leftMenu {
  text-align: left;
}
</style>