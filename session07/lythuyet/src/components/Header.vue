<template>
  <div>
    <h1>Header</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
    const data = "Trần Thị Minh Sâm"
    const emit = defineEmits(["messageeSent"])
    const handleClick = () => {
        emit("messageSent", data)
    }
</script>

<style>

</style>
