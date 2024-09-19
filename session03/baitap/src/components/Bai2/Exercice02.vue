<template>
  <div id="app">
    <h1 :id="elementId" :class="elementClass">Heading</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const elementId = ref('heading')
const elementClass = ref('heading')
</script>

<style scoped>
.heading {
  font-size: 24px;
  color: blue;
}
</style>
