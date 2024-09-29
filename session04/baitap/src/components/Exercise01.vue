<template>
  <div>
    <button @click="handleClick">Click {{count}} lần</button>
  </div>
</template>

<script setup>
    import {ref} from "vue";

    const count = ref(0)

    const handleClick = () => {
        count.value = count.value + 1
    }
</script>

<style>

</style>