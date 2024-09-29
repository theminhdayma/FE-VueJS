<template>
  <div>
    <button @click="handleClick">{{ isShow ? 'Hiện' : 'Ẩn' }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);

const handleClick = () => {
  isShow.value = !isShow.value;
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
}
</style>
