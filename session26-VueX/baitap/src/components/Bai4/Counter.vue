<template>
    <div>
      <h2>Giá trị Counter: {{ counter }}</h2>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const counter = computed(() => store.getters.getCounter);
  
  const increment = () => {
    store.dispatch('incrementCounter');
  };
  
  const decrement = () => {
    store.dispatch('decrementCounter');
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    margin: 5px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f0f0f0;
  }
  </style>
  