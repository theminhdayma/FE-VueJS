<template>
    <div>
        <img :src="imgURL"  alt="img1">
        <img v-bind:src="imgURL" alt="img2">
    </div>
</template>

<script setup>
    const imgURL = "https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-3-scaled.jpg"
</script>

<style scoped>
    img {
        width: 100px;
        height: 100px;
    }
</style>