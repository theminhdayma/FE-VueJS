<template>
  <div>
    <h2>Thông tin sản phẩm</h2>
    <ProductChildren :product="product" />
  </div>
</template>

<script setup>
import ProductChildren from "./ProductChildren.vue";
import { reactive } from "vue";

const product = reactive({
  id: 1,
  name: "Sản phẩm A",
  price: 100,
  quantity: 50,
});
</script>

<style scoped>

</style>
