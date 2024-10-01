<template>
  <div>
    <h1>Message Parent</h1>
    <!-- Gọi component con và lắng nghe sự kiện messageSent -->
    <MessageChildren @messageSent="displayMessage" />
  </div>
</template>

<script setup>
import MessageChildren from './MessageChildren.vue';

// Hàm nhận sự kiện và hiển thị thông báo dưới dạng alert
function displayMessage(receivedMessage) {
  alert(receivedMessage);
}
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
