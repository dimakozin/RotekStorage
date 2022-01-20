<template>
    <div class="leftMenu">
        <aside class="menu">
            <p class="menu-label">
                Алфавитный список
            </p>
            <ul v-for="obj in GET_ALL_UNIQUE_SORTED_BY_NAME()" v-bind:key="obj">
              <p class="menu-label">
                {{obj.char}}
              </p>
              <ul class="menu-list" v-for="item in obj.items" v-bind:key="item">
                <li><a 
                @click="setActive(obj.char, item)"
                :class="{ 'is-active' : obj.char === GET_ACTIVE_MENU_PARAMS().char & item === GET_ACTIVE_MENU_PARAMS().item  }"
                >{{item}}</a></li>
            </ul>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapActions } from 'vuex'

@Options({
    data () {
      return {  }
    },
    props: {

    },
    methods:{
      ...mapGetters(['GET_ALL_UNIQUE_SORTED_BY_NAME', 'GET_ACTIVE_MENU_PARAMS']),
      ...mapActions(['setActiveElement']),
      setActive (char:string, item: string) {
        this.setActiveElement({char: char, item:item})
      }
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