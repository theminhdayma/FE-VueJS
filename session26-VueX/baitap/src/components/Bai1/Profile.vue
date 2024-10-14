<template>
  <div>
    <h2>Thông tin cá nhân</h2>
    <ul>
        <li> ID: {{ store.state.users[0].id }}</li>
        <li>Tên: {{ store.state.users[0].name }}</li>
        <li>giới tính: {{ store.state.users[0].gender }}</li>
        <li>Ngày sinh: {{ store.state.users[0].dateOfBirth }}</li>
        <li>Địa chỉ: {{ store.state.users[0].address }}</li>
    </ul>
  </div>
</template>

<script setup>
    import { useStore } from 'vuex';

    const store = useStore();

</script>

<style scoped>

</style>