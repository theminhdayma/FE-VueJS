<template>
  <div>
    <h1>Vue Router</h1>
    <router-link to="/">Home</router-link> || 
    <router-link to="/about">About</router-link> || 
    <router-link to="/contact">Contact</router-link>

    <button @click="handleClick">Click redirect</button>
    <!-- <a href="/">Click Home</a> ||
    <a href="/about">Click About</a> || 
    <a href="/contact">Click Contact</a> -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// KHai báo hàm điều hướng sang các trang 
  import {useRouter} from "vue-router"
  const router = useRouter()

  const handleClick = () => {
    // router.push("/contact")
    router.replace("/contact")
  }
</script>

<style scoped>

</style>