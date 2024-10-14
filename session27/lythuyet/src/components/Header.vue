<template>
  <div>
    <h1>Header</h1>
    <p>giá trị count: {{ store.state.count }}</p>
    <button @click="handleClick">Tăng Count</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

    const store = useStore()
    const handleClick = () => {
        store.commit("increase", {
            amount: 5
        })
    }
</script>

<style scoped>

</style>

