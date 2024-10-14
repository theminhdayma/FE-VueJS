<template>
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border="1" cellspacing="0" cellpadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }}$</td>
            <td>{{ product.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const products = computed(() => store.getters.getProducts);
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  </style>
  