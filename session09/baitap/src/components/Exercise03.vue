<template>
  <div>
    <input v-model="inputValue" type="date">
    <h3>Ngày sinh: {{inputValue}} </h3>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const inputValue = ref("")
</script>

<style>

</style>