<template>
  <div>
    <h1>Child</h1>
    <p>Giá trị nhận từ component cha là: {{ propsName }}</p>
    <p>Tuổi: {{ age }}</p>

    <p>Nơi hiển thị slot của học lập trình Vuejs</p>
    <!-- Truyền dữ liệu cho slot bằng v-slot -->
    <slot :item="data" name="vueJS"></slot>

    <p>Nơi hiển thị Tìm hiểu nội dung về slot trong vueJs</p>
    <slot name="timhieu"></slot>
  </div>
</template>

<script setup>
const props = defineProps(["propsName", "age"]);
const data = "Nguyễn Thế Minh";
</script>

<style>
/* Styles */
</style>
