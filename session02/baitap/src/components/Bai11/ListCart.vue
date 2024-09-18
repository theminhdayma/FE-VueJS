<template>
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Shopping Cart</h2>
      <p class="mb-2">You have {{ items.length }} items in your cart</p>
      <div v-for="item in items" :key="item.id" class="flex justify-between items-center mb-4">
        <Cart :item="item" />
      </div>
      <button class="text-blue-500 mt-4">
        ← Continue shopping
      </button>
    </div>
  </template>
  
  <script>
  import Cart from './Cart.vue';
  
  export default {
    components: { Cart },
    data() {
      return {
        items: [
          { id: 1, name: 'Iphone 11 pro', quantity: 2, price: 900 },
          { id: 2, name: 'Samsung galaxy Note 10', quantity: 2, price: 900 },
          { id: 3, name: 'Canon EOS M50', quantity: 1, price: 1199 },
          { id: 4, name: 'MacBook Pro', quantity: 1, price: 1799 }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  