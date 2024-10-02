<template>
  <div>
    <h2>Danh sách người dùng</h2>
    <button @click="showForm = true">Add user</button>
    <FormAddUser v-if="showForm" @close="handleClose" />
    <ul>
      <li v-for="(user, index) in users" :key="index">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormAddUser from './FormAddUser.vue';

const showForm = ref(false);
const users = ref([]);

const handleClose = () => {
  showForm.value = false;
};

const addUser = (newUser) => {
  users.value.push(newUser);
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
