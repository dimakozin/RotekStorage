<template>
    <div class="modal is-active" v-show="GET_MODAL_STATE">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Ящик №{{boxId}}</p>
            <button class="delete" aria-label="close" @click="close()"></button>
            </header>
            <section class="modal-card-body">
                <p v-for="item in items" v-bind:key="item">
                    {{item}}
                </p>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
        </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapActions, mapGetters} from 'vuex'

@Options({
    props: {
        boxId: {
            required: true,
            type: Number
        },
        items: {
            required: true,
            type: Array
        },
    },
    data () {
        return { }
    },
    methods:{
        ...mapActions({
            closeModal: 'closeModal'
        }),
        close () {
            this.closeModal()
        }
    },
    computed: {
        ...mapGetters(['GET_MODAL_STATE']),
    }
})

export default class BoxModal extends Vue {
    
}
</script>
