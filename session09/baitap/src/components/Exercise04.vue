<template>
  <div>
    <input v-model="inputValue" type="range">
    <h3>Tiến độ hoàn thành: {{inputValue}} %</h3>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const inputValue = ref("")
</script>

<style>

</style>