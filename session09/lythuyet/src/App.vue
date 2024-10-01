<template>
  <div>
    <h1>Data Binding</h1>
    <h3>One - way Data Binding</h3>
    <button @click="handleClick">Click</button>
    <p>Hiển thị giá trị của count: {{count}} </p>
    <p>========================================</p>
    <one-way/>
    <p>=====================================</p>
    <two-way/>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    import oneWay from "./components/OneWay.vue"
    import twoWay from "./components/TwoWay.vue"
    const count = ref(0)
    console.log(1111111111111);
    

    const handleClick = () => {
        count.value += 1
        console.log(count.value);
        
    }
</script>

<style>

</style>