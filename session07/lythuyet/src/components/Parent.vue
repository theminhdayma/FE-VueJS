<template>
  <div>
    <h1>Parent</h1>
    <!-- Sử dụng v-slot để truyền nội dung vào các slot của Child component -->
    <Child :propsName="message" :age="age">
        <!-- Sử dụng v-slot với tên slot "vueJS" -->
        <template v-slot:vueJS="{ item }">
            <p>Teen: {{ item }}</p>
            <h2>Học lập trình với VueJS</h2>
        </template>

        <!-- Sử dụng v-slot với tên slot "timhieu" -->
        <template v-slot:timhieu>
            <h3>Tìm hiểu nội dung về slot trong vueJs</h3>
        </template>
    </Child>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Child from "./Child.vue";

let message = ref("hello");
let age = ref(19);
</script>

<style>
/* Styles */
</style>
