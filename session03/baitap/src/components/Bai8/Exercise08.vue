<template>
  <div class="link"> 
    <a href="http://www.google.com" @click="checkLink">Link sai</a>
    <a href="https://www.google.com" @click="checkLink">Link đúng</a>
  </div>
</template>

<script setup>

const checkLink = (event) => {
  const url = event.target.href;
  if (!url.startsWith("https://")) {
    event.preventDefault(); 
    alert("Đường dẫn không hợp lệ !!!");
  }
}
</script>

<style>
    .link {
        display: flex;
        gap: 10px;
    }
</style>
