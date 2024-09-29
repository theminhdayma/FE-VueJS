<template>
  <div>
    <h1>Shopping Cart</h1>

    <ul>
      <li v-for="(product, index) in cart.products" :key="index">
        {{ product.name }} - Số lượng: {{ product.quantity }}
        <button @click="increaseQuantity(index)">Add One More</button>
      </li>
    </ul>

    <p>Total Quantity in Cart: {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const cart = reactive({
  products: [
    { name: 'Mèn mén loại 1', quantity: 1 },
    { name: 'Mèn mén loại 2', quantity: 2 },
    { name: 'Mèn mén loại 3', quantity: 3 }
  ]
});

const increaseQuantity = (index) => {
  cart.products[index].quantity++;
};

const totalQuantity = computed(() => {
  return cart.products.reduce((total, product) => total + product.quantity, 0);
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
button {
  margin-left: 10px;
}
</style>
