<template>
  <div>
    <button @click="showNotification">Show notification</button>
    
    <div v-if="isVisible" class="notification">
      <span>Hiển thị thông báo ở đây</span>
      <button class="close-button" @click="closeNotification">X</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Biến trạng thái để kiểm soát hiển thị thông báo
const isVisible = ref(false);

// Hàm hiển thị thông báo
const showNotification = () => {
  isVisible.value = true;

  // Tự động đóng thông báo sau 5 giây
  setTimeout(() => {
    closeNotification();
  }, 5000);
};

// Hàm đóng thông báo
const closeNotification = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.notification {
  width: 190px;
  top: 10px;
  left: 10px;
  background-color: #f9c74f; /* Màu nền vàng */
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
