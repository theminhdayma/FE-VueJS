<template>
  <div>
    <h2>Giá trị đếm: {{ count }}</h2>
    <CountChildren @increment="incrementCount" />
  </div>
</template>

<script setup>
import CountChildren from "./CountChildren.vue";
import { ref } from "vue";

const count = ref(0);

const incrementCount = () => {
  count.value++;
};
</script>

<style scoped>

</style>
