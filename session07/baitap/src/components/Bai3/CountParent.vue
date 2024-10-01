<template>
  <div>
    <h2>Giá trị đếm: {{ count }}</h2>
    <CountChildren @increment="incrementCount" />
  </div>
</template>

<script setup>
import CountChildren from "./CountChildren.vue";
import { ref } from "vue";

// Khai báo biến đếm
const count = ref(0);

// Phương thức để tăng giá trị đếm
const incrementCount = () => {
  count.value++;
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
