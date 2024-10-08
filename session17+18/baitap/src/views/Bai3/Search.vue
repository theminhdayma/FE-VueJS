<template>
    <div>
      <input  type="text" v-model="inputValue">
      <button @click="handleSearch">Tìm kiếm</button>
      <h1>Từ khóa: {{valueSearch}}</h1>
    </div>
  </template>
  
  <script setup>
  import {ref,computed} from "vue"
  import { useRoute,useRouter } from "vue-router";

  const route = useRoute()
  const router = useRouter()

  const inputValue = ref("")
  const handleSearch = () => {
    router.push({query: { q: inputValue.value } });
  }

  const valueSearch = computed (()=> {
        return route.query.q
    })
  </script>
  
  <style>
  
  </style>