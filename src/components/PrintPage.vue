<template>
    <section class="print-container">
        Данные для печати
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})

export default class PrintPage extends Vue {}
</script>

<style scoped>
.print-container {
    visibility: hidden;
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