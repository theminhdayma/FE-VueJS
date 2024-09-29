<template>
  <div>
    <h3>Company: {{data.company}} </h3>
    <h3>Age: {{data.age}} </h3>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script setup>
    import {reactive} from "vue";

    const data = reactive({
        company: "Rikkei Academy",
        age: 2
    })

    const handleClick = () => {
        data.company = "Rekkei Education"
        data.age = 1
    }
    
</script>

<style>

</style>