<template>
<div>
    <h1>Bài 8</h1>
    <div class="flex gap-5">
        <router-link to="/navbar/dashboard">Dashboard</router-link> 
        <router-link to="/navbar/account">Account</router-link> 
        <router-link to="/navbar/product">Product</router-link>
    </div>
</div>
  
</template>

<script setup>

</script>

<style>
  .router-link-active {
    width: 70px;
    height: 40px;
    font-weight: 700;
    padding: 5px;
    border-radius: 10px;
    background-color:blue ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>