<template>
  <div>
    <button @click="sortAscending">Tăng dần</button>
    <button @click="sortDescending">Giảm dần</button>
    <ul>
      <li v-for="(number, index) in state.numbers" :key="index">{{ number }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  numbers: [34, 12, 5, 67, 23, 90, 3]
});

const sortAscending = () => {
  state.numbers.sort((a, b) => a - b);
};

const sortDescending = () => {
  state.numbers.sort((a, b) => b - a);
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

ul {
    display: flex;
    gap: 10px;
  list-style-type: none; 
  padding: 0;
}
</style>
