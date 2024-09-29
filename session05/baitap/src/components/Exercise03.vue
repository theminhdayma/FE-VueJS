<template>
  <div>
    <p v-if="state.userRole === 'admin'">Quyền của bạn: Quản trị viên</p>
    <p v-else-if="state.userRole === 'user'">Quyền của bạn: Người dùng</p>
    <p v-else-if="state.userRole === 'guest'">Quyền của bạn: Khách</p>
    <p v-else>Vai trò không xác định</p>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  userRole: 'admin'
//   userRole: 'user'
//   userRole: 'guest'
});
</script>

<style scoped>

</style>
