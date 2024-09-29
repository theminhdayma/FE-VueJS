<template>
  <div>
    <h2>Giỏ hàng</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - Số lượng: {{ product.quantity }}
        <button @click="increaseQuantity(index)">Tăng số lượng</button>
      </li>
    </ul>
    <p>Tổng số lượng sản phẩm: {{ totalQuantity }}</p>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// Khởi tạo danh sách sản phẩm với số lượng ban đầu
const products = ref([
  { name: 'Mèn Mén Loại 1', quantity: 1 },
  { name: 'Mèn Mén Loại 2', quantity: 1 },
  { name: 'Mèn Mén Loại 3', quantity: 1 }
]);

const increaseQuantity = (index) => {
  products.value[index].quantity += 1;
};

const totalQuantity = computed(() => {
  return products.value.reduce((total, product) => total + product.quantity, 0);
});
</script>

<style scoped>

</style>
