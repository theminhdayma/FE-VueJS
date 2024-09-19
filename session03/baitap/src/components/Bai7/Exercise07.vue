<template>
  <form @submit="handleSubmit">
    <input type="text" placeholder="Enter text" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Form submission prevented!"); 
}
</script>

<style>

</style>
