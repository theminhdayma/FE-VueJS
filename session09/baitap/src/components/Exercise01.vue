<template>
  <div>
    <input v-model="inputValue" type="text">
    <h3>giá trị: {{inputValue}} </h3>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const inputValue = ref("")
</script>

<style>

</style>