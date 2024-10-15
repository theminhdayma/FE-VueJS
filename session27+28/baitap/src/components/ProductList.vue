<template>
    <div class="w-full lg:w-1/2 p-4">
      <h2 class="text-lg font-bold mb-4">List Product</h2>
      <!-- Duyệt qua danh sách sản phẩm -->
      <div v-for="product in products" :key="product.id" class="border p-4 rounded-lg mb-4 flex items-center">
        <img :src="product.image" alt="Product Image" class="w-20 h-20 object-cover mr-4" />
        <div class="flex-1">
          <h3 class="text-base font-semibold">{{ product.name }}</h3>
          <p class="text-sm text-gray-600">{{ product.description }}</p>
          <p class="text-sm font-bold">Total: {{ product.quantity }}</p>
          <div class="mt-2 flex items-center space-x-4">
            <input type="number" v-model="product.quantity" min="1" class="w-16 p-1 border rounded" />
            <p class="text-sm">Price: ${{ product.price }}</p>
            <button @click="addToCart(product)" class="bg-blue-500 text-white px-3 py-1 rounded">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  // Sử dụng Vuex store
  const store = useStore();
  
  // Lấy danh sách sản phẩm từ store (computed property)
  const products = computed(() => store.state.product.products);
  
  // Tự động lấy sản phẩm khi component được tạo ra
  onMounted(() => {
    store.dispatch('getAllProduct'); // Gọi action để lấy sản phẩm từ API
  });
  
  const addToCart = (product) => {
    console.log('Add to cart:', product);
  };
  </script>
  
  <style scoped></style>
  