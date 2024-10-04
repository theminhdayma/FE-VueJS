<template>
  <div>
    <h1 class="flex items-center justify-center text-4xl">Trang giỏ hàng</h1>
    <Cart></Cart>
    <br><br><br><br><br><br>
    <h1 class="flex items-center justify-center text-4xl">Trang chi tiết sản phẩm</h1>
    <ProductDetail></ProductDetail>
  </div>
</template>

<script setup>
    import Cart from "./components/Cart.vue"
    import ProductDetail from "./components/ProductDetail.vue"
</script>

<style scoped>

</style>