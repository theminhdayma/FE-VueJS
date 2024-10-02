<template>
    <div>
        <button @click="handleIncreaseAge">Increase age</button>
        <Exercise04Children :count = count></Exercise04Children>
    </div>
</template>

<script setup>
    import { ref, onUpdated} from "vue";
    import Exercise04Children from "./Exercise04Children.vue"

    const count = ref(0)

    const handleIncreaseAge = () => {
        count.value +=1
    }
</script>

<style>

</style>