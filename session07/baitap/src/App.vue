<template>
  <div class="container">
    <h1>Bài 1</h1>
    <ParentComponent></ParentComponent>
    <br>
    <h1>Bài 2</h1>
    <ProductParent></ProductParent>
    <br>
    <h1>Bài 3</h1>
    <CountParent></CountParent>
    <br>
    <h1>Bài 4</h1>
    <TodoApp></TodoApp>
    <br>
    <h1>Bài 5</h1>
    <Parent></Parent>
    <br>
    <h1>Bài 6</h1>
    <Card></Card>
    <h1>Bài 7</h1>
    <MessageParent></MessageParent>
    <br>
    <h1>Bài 8</h1>
    <ListUser></ListUser>
    <br>
    <h1>BÀI 9</h1>
    
  </div>
</template>

<script setup>
  import ParentComponent from "./components/Bai1/ParentComponent.vue"
  import ProductParent from "./components/Bai2/ProductParent.vue"
  import CountParent from "./components/Bai3/CountParent.vue"
  import TodoApp from "./components/Bai4/TodoApp.vue"
  import Parent from "./components/Bai5/Parent.vue"
  import Card from "./components/Bai6/Card.vue"
  import MessageParent from "./components/Bai7/MessageParent.vue"
  import ListUser from "./components/Bai8/ListUser.vue"
</script>

<style scoped>
  .container {
    margin-left: 200px;
  }
</style>