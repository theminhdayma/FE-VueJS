<template>
  <div>
    <h1>Seseion 07
      <div>
        <ul>
          <li>Props</li>
          <li>Slots</li>
          <li>Emit</li>
        </ul>
      </div>
    </h1>
    <Parent></Parent>
      <Header @messageSent= handleMessage></Header>
  </div>
</template>

<script setup>
import Parent from "./components/Parent.vue"
import Header from "./components/Header.vue"

const handleMessage = (data) => {
  console.log("giá trị nhận về từ component con Header: ", data);
  
}
</script>

<style>

</style>