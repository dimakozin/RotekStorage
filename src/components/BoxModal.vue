<template>
    <div class="modal is-active" v-show="GET_MODAL_STATE">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">Ячейка № {{boxId}}</p>
            <button class="delete" aria-label="close" @click="close()"></button>
            </header>
            <section class="modal-card-body">
                <table class="table">
                    <thead>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Комментарий</th>
                       <!-- <th>Действия</th> -->
                    </thead>
                    <tbody>
                        <tr v-for="item in GET_BY_BOX_AND_SECTION(boxId, section)" v-bind:key="item">
                            <th>{{item.title}}</th>
                            <th>{{item.amount}}</th>
                            <th>{{item.comment}}</th>
                            <!--
                            <th>                     
                                <button class="button is-small is-primary is-delete-button"
                                @click="addOne(item.id)"
                                >+</button>
                                <button class="button is-small is-danger is-delete-button"
                                @click="removeOne(item.id)"
                                >-</button>
                            </th>
                            -->
                        </tr>
                    </tbody>
                    <tfoot>
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Комментарий</th>
                       <!-- <th>Действия</th> -->
                    </tfoot>
                </table>
            </section>
            <footer class="modal-card-foot">
                <!--
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
                -->
                <h4 class="title is-4">Сформировать Excel документ</h4>
                <div class="test">
                    <a class="button"
                    @click="convertData()">
                        Сформировать
                    </a>
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
            type: String
        },
        section : {
            required: true,
            type: Number
        }
    },
    data () {
        return { 
            newSubjectTitle: ""
        }
    },
    methods:{
        ...mapActions({
            closeModal: 'closeModal',
            addNewSubject: 'addNewSubject',
            deleteElement: 'deleteElement',
            addOne: 'addOne',
            removeOne: 'removeOne'
        }),
        close () {
            this.closeModal()
        },
        addSubject () {
            this.addNewSubject({
                boxId: this.boxId,
                title: this.newSubjectTitle
            })
        },
        addOne (id : number) {
            this.addOne(id)
        },
        removeOne (id: number) {
            this.removeOne(id)
        },
        convertData () {
            const subjectData = this.$store.getters.GET_BY_BOX_AND_SECTION(this.boxId, this.section)
            // @ts-ignore
            this.$convertToExcel(XLSX, subjectData)
        }
    },
    computed: {
        ...mapGetters(['GET_MODAL_STATE', 'GET_BY_BOX_AND_SECTION']),
    }
})

export default class BoxModal extends Vue {
    
}
</script>

<style lang="scss">
.modal-card-foot{
    display: block!important;
}

.is-box-item{
    display: flex;
    padding-bottom: 10px;
}

.is-delete-button{
    margin-left: 5px
}

table.table{
    width: 100%;
}

</style>