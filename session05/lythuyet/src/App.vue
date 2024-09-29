<template>
  <div>
    <h1>Condition & List rendering</h1>
    <ol>
      <li>v-if</li>
      <li>v-else</li>
      <li>v-else-if</li>
      <li>v-show</li>
    </ol>

    <p>V-if</p>
    <p v-if="isCheck">Hiển thị V-if nếu điều kiện thỏa mãn !!!</p>
    <p v-else>Hiển thị V-else</p>
  </div>
</template>

<script setup>
  const isCheck = false
</script>

<style>

</style>