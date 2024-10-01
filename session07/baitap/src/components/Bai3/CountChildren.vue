<template>
  <div>
    <button @click="handleIncrement">Increment</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

// Khai báo sự kiện increment
const emit = defineEmits(["increment"]);

// Phương thức để phát sự kiện khi nút được nhấn
const handleIncrement = () => {
  emit("increment");
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
