<template>
  <div>
    <button @click="changeBackground">Change background</button>
    <div 
      ref="colorDiv"
      :style="{ backgroundColor: backgroundColor }"
      class="color-box"
    >
      This is a box
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const backgroundColor = ref('red');

const changeBackground = () => {
  backgroundColor.value = backgroundColor.value === 'red' ? 'green' : 'red';
};
</script>

<style scoped>
.color-box {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  color: black;
  font-weight: 600;
}
</style>
