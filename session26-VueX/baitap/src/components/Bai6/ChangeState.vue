<template>
    <div>
      <h2>Company: {{ company }}</h2>
      <button @click="changeCompany">Change state</button>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const company = computed(() => store.getters.getCompany);
  
  const changeCompany = () => {
    store.dispatch('updateCompany');
  };
  </script>
  
  <style scoped>
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
  