<template>
    <div class="leftMenu">
        <aside class="menu">
            <p class="menu-label">
                Алфавитный список
            </p>
            <ul v-for="obj in getSorted()" v-bind:key="obj">
              <p class="menu-label">
                {{obj.char}}
              </p>
              <ul class="menu-list" v-for="item in obj.items" v-bind:key="item">
                <li><a class>{{item}}</a></li>
            </ul>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {

    },
    methods:{
      getSorted() {
        return this.$store.getters.GET_ALL_SORTED_BY_NAME
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