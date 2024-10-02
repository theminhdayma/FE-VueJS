<template>
  <div>
    <h2>Current Company: {{ currentCompany }}</h2>
    <h3>Age: {{ age }}</h3>
    <button class="btn-random" @click="updateAge">Random</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const age = ref(1);

const companies = ['Rikkei Academy', 'Rikkei Education', 'Rikkei Fukuoka'];

const currentCompany = computed(() => {
  return companies[age.value - 1] || 'Unknown Company';
});

const updateAge = () => {
  age.value = Math.floor(Math.random() * 10) + 1; 
};
</script>

<style scoped>
.btn-random {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn-random:hover {
  background-color: darkblue;
}
</style>
