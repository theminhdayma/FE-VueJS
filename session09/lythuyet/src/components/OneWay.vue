<template>
  <div>
    <h1>One-Way</h1>
    <input :value="inputValue" type="text">
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const inputValue = ref("Rekkei Academy")
   
   const handleClick = () => {
    inputValue.value = "Nguyễn Thế Minh"
   }
</script>

<style>

</style>