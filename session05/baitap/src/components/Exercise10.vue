<template>
  <div>
    <button @click="addRandomNumber">Random number</button>
    
    <h3>Danh sách số nguyên:</h3>
    <ul>
      <li v-for="(number, index) in state.numbers" :key="index">{{ number }}</li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Create a reactive state for the numbers array
const state = reactive({
  numbers: [] // Initialize an empty array
});

// Function to add a random number to the array
const addRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  state.numbers.push(randomNumber); // Add the random number to the array
};
</script>

<style scoped>
button {
  margin-bottom: 10px;
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
