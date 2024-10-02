<template>
  <div>
    <h2>Thời gian thực tế: {{ time }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const time = ref(getCurrentTime());
let intervalId = null;

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

onMounted(() => {
  intervalId = setInterval(() => {
    time.value = getCurrentTime();
  }, 1000); 
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>

</style>
