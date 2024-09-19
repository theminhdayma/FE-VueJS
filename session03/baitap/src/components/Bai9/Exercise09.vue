<template>
    <div>
        <button @click="increaseCount">Click {{count}} lần</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';
    const count =ref(0);
    const increaseCount = () => {
        count.value = count.value + 1;
    }
</script>

<style>

</style>