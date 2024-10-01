<template>
  <div class="form-container">
    <h3>Thêm người dùng mới</h3>
    <form @submit.prevent="submitForm">
      <div>
        <label>Name:</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Address:</label>
        <input v-model="address" type="text" required />
      </div>
      <button type="submit">Thêm người dùng</button>
      <button type="button" @click="closeForm">Close</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const emit = defineEmits();

const name = ref('');
const email = ref('');
const address = ref('');

const submitForm = () => {
  const newUser = { name: name.value, email: email.value, address: address.value };
  // Emit the new user data to the parent component
  emit('addUser', newUser);
  // Reset form fields after submission
  name.value = '';
  email.value = '';
  address.value = '';
};

const closeForm = () => {
  emit('close'); // Emit close event to parent component
};
</script>

<style scoped>
.form-container {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px 0;
}
</style>
