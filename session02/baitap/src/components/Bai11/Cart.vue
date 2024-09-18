<template>
    <div class="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <div class="flex items-center">
        <img class="w-12 h-12 rounded-lg" :src="item.image" alt="product image" />
        <div class="ml-4">
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <p class="text-sm text-gray-500">{{ item.details }}</p>
        </div>
      </div>
      <div class="flex items-center">
        <p class="mr-4">{{ item.quantity }}</p>
        <p class="text-lg font-semibold text-gray-900">${{ item.price }}</p>
        <button class="ml-4 text-red-500">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: Object
    }
  }
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  