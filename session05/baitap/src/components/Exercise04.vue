<template>
  <div>
    <button @click="state.isVisible = true">Hiển thị</button>
    <button @click="state.isVisible = false">Ẩn</button>

    <div v-show="state.isVisible">
      Đây là thông báo!
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  isVisible: false
});
</script>

<style scoped>

</style>
