<template>
  <v-select
    :items="['Thông tin cá nhân', 'Đổi mật khẩu', 'Đăng xuất']"
    label="QUẢN TRỊ VIÊN"
    class="custom-select"
  ></v-select>
</template>

<script setup>

</script>

<style scoped>
.custom-select {
  max-width: 200px;
  background-color: #1976d2;
  color: white; 
}
</style>
