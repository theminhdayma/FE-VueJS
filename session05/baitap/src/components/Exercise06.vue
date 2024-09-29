<template>
  <div class="listNumber">
    <!-- Render only numbers whose digit sum is even -->
    <p v-for="(number, index) in evenDigitSumNumbers" :key="index">
      {{ number }}
    </p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({
  numbers: [5, 12, 15, 22, 9, 18, 25, 30, 7, 33] 
});

const sumOfDigits = (number) => {
  return String(number)
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit), 0);
};

const evenDigitSumNumbers = computed(() => {
  return state.numbers.filter(number => sumOfDigits(number) % 2 === 0);
});
</script>

<style scoped>
.listNumber {
    display: flex;
    gap: 10px;
}
</style>
