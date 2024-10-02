<template>
  <div>
    <h1>Time: {{ count }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const count = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    count.value++;
  }, 1000); 
});
</script>

<style scoped>

</style>
