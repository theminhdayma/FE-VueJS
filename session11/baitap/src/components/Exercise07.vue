<template>
  <div>
    <label for="title">Nhập: </label>
    <input id="title" type="text" v-model="inputTitle" placeholder="Nhập..." />
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const inputTitle = ref('');

onMounted(() => {
  document.title = inputTitle.value;
});

onUpdated(() => {
  document.title = inputTitle.value;
});
</script>
