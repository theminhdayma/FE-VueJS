<template>
  <div>
    <h1>Component Cha</h1>
    <ChildrenComponent :companyName="companyName" />
  </div>
</template>

<script setup>
const companyName = "Rikkei Academy";

import ChildrenComponent from './ChildrenComponent.vue';
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
