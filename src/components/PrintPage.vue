<template>
    <section class="print-container">
        <div class="title">Список товарно-материальных ценностей</div>
        <table class="table">
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Количество</th>
                    <th>Стеллаж</th>
                    <th>Ячейка</th>
                    <th>Комментарий</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in this.$store.getters.GET_PRINT_DATA" :key="index">
                    <th> {{item.title}} </th>
                    <th> {{item.amount}} </th>
                    <th> {{item.section}} </th>
                    <th> {{item.boxId}} </th>
                    <th> {{item.comment}} </th>
                </tr>
            </tbody>
            </table>
    </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class PrintPage extends Vue {}
</script>

<style scoped>
.print-container {
    visibility: hidden;
    height: 0px;
}

@media print {
    body {
        visibility: hidden;
    }

    .print-container {
        visibility: visible;
    }
}

</style>