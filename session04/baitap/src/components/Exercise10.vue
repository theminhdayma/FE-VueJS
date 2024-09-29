
<script setup>
import { reactive } from 'vue';

const state = reactive({
  isVisible: false
});

const showContent = () => {
  state.isVisible = true;
    console.log(state.isVisible);
  
};

const hideContent = () => {
  state.isVisible = false;
  console.log(state.isVisible);
  

};
</script>

<template>
  <div>
    <button @click="showContent">Hiển thị</button>
    <button @click="hideContent">Ẩn</button>
    <p v-if="state.isVisible">Nội dung được hiển thị</p>
    <p v-else>Nội dung bị ẩn</p>
  </div>
</template>

<style scoped>
button {
  margin-right: 10px;
}
</style>