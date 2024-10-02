<template>
  <div>
    <h1>Message Parent</h1>
    <MessageChildren @messageSent="displayMessage" />
  </div>
</template>

<script setup>
import MessageChildren from './MessageChildren.vue';

function displayMessage(receivedMessage) {
  alert(receivedMessage);
}
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
