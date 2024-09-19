<template>
  <div 
    :class="{ active: isActive }"
    :style="{ backgroundColor: backgroundColor }"
    class="backgroup"
  >
    Block
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
const backgroundColor = ref('green');
</script>

<style>
.backgroup {
  padding: 20px;
  font-size: 16px;
}

.active {
  color: #000000; 
}
</style>
