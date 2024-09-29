<template>
  <div>
    <button @click="isShow = true">Button</button>
    <p v-if="isShow">Rikkei Education</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
