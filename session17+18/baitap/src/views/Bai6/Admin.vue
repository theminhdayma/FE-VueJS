<template>
    <div>
        <nav class="flex gap-4">
            <router-link to="/admin" class="text-green-500" exact-active-class="active">Dashboard</router-link>
            <router-link to="/user" class="text-green-500" active-class="">User</router-link>
            <router-link to="/product" class="text-green-500" active-class="">Product</router-link>
            <router-link to="/setting" class="text-green-500" active-class="">Setting</router-link>
        </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style>
  .active {
    background-color: red;
    color: white;
    border-radius: 10px;
    font-weight: 700;
  }
  </style>