<template>
  <div>
    <h1>Components Lifecycle</h1>
  </div>
</template>

<script setup>
    import {onBeforeMount, onMounted} from "vue"

    onMounted(()=> {
        console.log("hook onMounted được gọi !!!");      
    })

    onBeforeMount(()=> {
        console.log("hook onBeforeMount được gọi");
        
    })
</script>

<style>

</style>