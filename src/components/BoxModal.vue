<template>
    <div class="modal is-active" v-show="GET_MODAL_STATE">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Ящик №{{boxId}}</p>
            <button class="delete" aria-label="close" @click="close()"></button>
            </header>
            <section class="modal-card-body">
                <div class="control">
                    <p v-for="item in GET_BY_BOX(boxId)" v-bind:key="item">
                        {{item.title}}
                    </p>
                </div>
            </section>
            <footer class="modal-card-foot">
                <h4 class="title is-4">Добавление нового элемента</h4>
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input" type="text" v-model="newSubjectTitle" placeholder="Введите наименование...">
                    </div>
                    <div class="control">
                        <a class="button is-primary"
                        @click="addSubject()"
                        >Добавить</a>
                    </div>
                </div>
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
    },
    data () {
        return { 
            newSubjectTitle: ""
        }
    },
    methods:{
        ...mapActions({
            closeModal: 'closeModal',
            addNewSubject: 'addNewSubject'
        }),
        close () {
            this.closeModal()
        },
        addSubject () {
            this.addNewSubject({
                boxId: this.boxId,
                title: this.newSubjectTitle
            })
        }
    },
    computed: {
        ...mapGetters(['GET_MODAL_STATE', 'GET_BY_BOX']),
    }
})

export default class BoxModal extends Vue {
    
}
</script>

<style lang="scss">
.modal-card-foot{
    display: block!important;
}

</style>