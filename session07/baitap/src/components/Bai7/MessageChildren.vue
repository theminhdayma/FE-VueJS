<template>
  <div>
    <h2>Message Children</h2>
    <button @click="sendMessage">Send message</button>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['messageSent']);

function sendMessage() {
  emit('messageSent', 'Thế Minh deptrai');
}
</script>

<style scoped>
button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #369f72;
}
</style>
