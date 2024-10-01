<template>
  <div>
    <h2>Component Con</h2>
    <p>Tên công ty: {{ companyName }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  companyName: String, 
});
</script>

<style scoped>
h2 {
  color: green;
}
</style>
