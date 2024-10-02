<template>
  <div>
    <p>Component Child</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
  console.log('onBeforeUnmount được gọi !!!');
});

onUnmounted(() => {
  console.log('onUnmounted được gọi');
});
</script>
