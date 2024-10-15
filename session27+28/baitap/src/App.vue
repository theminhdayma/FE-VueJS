<template>
    <div class="container mx-auto flex flex-wrap">
      <ProductList />
      <ShoppingCart />
    </div>
  </template>
  
  <script setup>
  import ProductList from './components/ProductList.vue';
  import ShoppingCart from './components/ShoppingCart.vue';
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  </style>
  