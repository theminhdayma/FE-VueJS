<template>
  <div>
    <p>Giới tính: {{ state.currentGender }}</p>
    <button @click="randomizeGender">Random</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  genders: ['Nam', 'Nữ', 'Khác'],
  currentGender: 'Nam'
});

const randomizeGender = () => {
  const randomIndex = Math.floor(Math.random() * state.genders.length); 
  state.currentGender = state.genders[randomIndex]; 
};
</script>

<style scoped>

</style>
