<template>
  <div class="container">
    <h1>Bài 1</h1>
    <Product/>
    <br>
    <h1>Bài 2</h1>
    <ListProduct/>
    <br>
    <h1>Bài 7 + 8 + 9 + 10 + 11 + 12</h1>
    <TableProduct/>
    <br><br><br><br><br>
  </div>
</template>

<script setup>
  import Product from "@/components/Bai1/Product.vue"
  import ListProduct from "@/components/Bai2+3+4+5+6/ListProduct.vue"
  import TableProduct from "@/components/Bai7+8+9+10+11+12/TableProduct.vue";
</script>

<style>
  .container {
    margin-left: 200px;
    margin-top: 100px;
  }
</style>