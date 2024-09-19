<template>
  <div>
    <button @click="handleClick('Rekkei Academy')">Get param</button>
  </div>
</template>

<script setup>
    const handleClick = (value) => {
        console.log(value);       
    }
</script>

<style>

</style>