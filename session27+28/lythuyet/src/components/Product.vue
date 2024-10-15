<template>
    <div>
      <h1>Trang danh sách sản phẩm</h1>
      <button @click="handleClick">Thêm sản phẩm</button>
  
      <ul>
        <li v-for="pro in products" :key="pro.id">
          {{ pro.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  // Khởi tạo store
  const store = useStore();
  
  // Sử dụng computed để lấy danh sách sản phẩm từ state
  const products = computed(() => store.state.product.products);
  
  // Gọi action để lấy danh sách sản phẩm khi component được mount
  store.dispatch("getAllProduct");
  
  // Xử lý thêm sản phẩm mới
  const handleClick = () => {
    store.dispatch("addProductAction", {
      data: {
        name: "Iphone 15 Pro Max"
      }
    });
  };
  </script>
  
  <style scoped>
  </style>
  