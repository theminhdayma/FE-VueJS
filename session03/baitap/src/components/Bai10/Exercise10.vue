<template>
  <div>
    <input
      v-model="inputValue"
      @keydown="handleClick"
      placeholder="Nhập văn bản và nhấn Shift + Enter"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');

const handleClick = (event) => {
  if (event.key === 'Enter') {
    if (event.shiftKey) {
      alert(inputValue.value);
      inputValue.value = '';
    } else {
      alert('Bạn cần nhấn Shift + Enter');
    }
  }
};
</script>

<style scoped>

</style>
