<template>
    <div>
      <h2>Danh sách các số ngẫu nhiên:</h2>
      <ul>
        <li v-for="(number, index) in randomNumbers" :key="index">{{ number }}</li>
      </ul>
      <button @click="generateNumber">Generate Random Number</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const randomNumbers = computed(() => store.getters.getRandomNumbers);
  
  const generateNumber = () => {
    store.dispatch('generateRandomNumber');
  };
  </script>
  
  <style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 5px 0;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 10px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f0f0f0;
  }
  </style>
  