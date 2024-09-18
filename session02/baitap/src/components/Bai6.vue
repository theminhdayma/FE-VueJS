<template>
    <div>
      <h2>Họ và tên: {{ fullName }}</h2>
    </div>
  </template>
  
  <script setup>
  const firstName = "Nguyễn Thế";
  const lastName = "Minh";
  const fullName = `${firstName} ${lastName}`;
  </script>
  
  <style></style>