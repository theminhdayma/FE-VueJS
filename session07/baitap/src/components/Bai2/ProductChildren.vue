<template>
  <div>
    <h3>{{ product.name }}</h3>
    <p>ID: {{ product.id }}</p>
    <p>Giá: {{ product.price }} VNĐ</p>
    <p>Số lượng: {{ product.quantity }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);

console.log(props);
</script>

<style scoped>

</style>
