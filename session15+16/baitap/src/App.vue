<template>
  <div class="mt-[200px] ml-[200px]">
    <router-view></router-view>

    <h1>Bài 6</h1>
    <div class="flex gap-5">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/contact">Contact</router-link>
    </div>
    <br>
    <h1>Bài 7</h1>
    <div class="flex gap-5">
      <router-link to="/">Home</router-link> 
      <router-link to="/product">Product</router-link> 
      <router-link to="/detail">Detail</router-link>
    </div>

  </div>
</template>

<script setup>

</script>

<style>
  .router-link-active {
    width: 70px;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
    background-color:blue ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>