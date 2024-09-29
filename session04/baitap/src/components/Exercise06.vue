<template>
  <div>
    <h2>Shopping Cart</h2>
    
    <input type="number" v-model="inputValue" placeholder="Enter amount" />
    <button @click="addToCart">Add to cart</button>
    <h3>Tổng tiền: {{ totalPrice }}</h3>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputValue = ref(0);
const total = ref(0);

const totalPrice = computed(() => total.value);

const addToCart = () => {
  total.value += Number(inputValue.value);
  inputValue.value = 0;
};
</script>

<style scoped>

</style>
