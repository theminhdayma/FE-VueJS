<template>
  <v-card class="alert-card">
    <v-card-title class="text-h6 alert">
      Xác nhận
      <v-icon>mdi-close</v-icon>
    </v-card-title>
    <v-card-text>
      Bạn có chắc chắn muốn xóa tài khoản này không?
    </v-card-text>
  </v-card>
</template>

<script setup>
</script>

<style scoped>
.alert-card {
  background-color: #f5f5f5; 
  max-width: 450px;
  margin: 20px auto; 
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.alert {
  display: flex;
  justify-content: space-between;
}

.v-icon {
  cursor: pointer;
}
</style>
