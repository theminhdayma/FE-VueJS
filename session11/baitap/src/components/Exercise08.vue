<template>
  <div>
    <h1>Chiều rộng cửa sổ: {{ windowWidth }}px</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateWidth);
  windowWidth.value = window.innerWidth;
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
  windowWidth.value = window.innerWidth;
});
</script>

<style scoped>

</style>
