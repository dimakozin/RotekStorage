<template>
  <section class="hero is-link">
    <div class="hero-body">
      <p class="title">
        Расположение объектов на складе
      </p>
      <p class="title">
        <p class="control">
          <div class="dropdown is-active dropdown-block">
            <div class="dropdown-trigger">
                <div class="field">
                    <p class="control is-expanded has-icons-right">
                        <input class="input" type="search" placeholder="Введите объект поиска"/>
                    </p>
                </div>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                    <a href="#" class="dropdown-item">Молоток</a>
                    <a href="#" class="dropdown-item">ПЛК</a>
                    <hr class="dropdown-divider">
                    <a href="#" class="dropdown-item">Панель оператора Weintek</a>
                </div>
            </div>
          </div>
        </p>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})

export default class FindPanel extends Vue {
  msg!: string
}

</script>

<style lang="css">

.dropdown-block{
    display: block !important;
}
</style>