<template>
  <div>
    <h2>Đăng nhập</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input
          v-model="loginForm.email"
          type="email"
          id="email"
          placeholder="Nhập email"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      
      <div>
        <label for="password">Mật khẩu:</label>
        <input
          v-model="loginForm.password"
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <button type="submit">Đăng nhập</button>
    </form>
    <p v-if="loginMessage" :class="{'message-success': loginSuccess, 'message-error': !loginSuccess}">
      {{ loginMessage }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loginForm = ref({
  email: '',
  password: ''
});

const errors = ref({
  email: '',
  password: ''
});

const loginMessage = ref('');
const loginSuccess = ref(false); 

// Hàm kiểm tra email và mật khẩu có khớp với dữ liệu trong localStorage
const checkCredentials = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.find(user => user.email === email && user.password === password);
};

// Hàm xử lý đăng nhập
const handleLogin = () => {
  errors.value = {
    email: '',
    password: ''
  };
  loginMessage.value = '';

  // Kiểm tra validation
  if (!loginForm.value.email) {
    errors.value.email = 'Email không được để trống.';
  }
  if (!loginForm.value.password) {
    errors.value.password = 'Mật khẩu không được để trống.';
  }

  // Nếu không có lỗi validation, kiểm tra thông tin đăng nhập
  if (!errors.value.email && !errors.value.password) {
    const user = checkCredentials(loginForm.value.email, loginForm.value.password);
    
    if (user) {
      loginMessage.value = 'Đăng nhập thành công';
      loginSuccess.value = true; 
      loginForm.value = {
         email: '',
         password: ''
      }
    } else {
      loginMessage.value = 'Đăng nhập thất bại';
      loginSuccess.value = false; 
      loginForm.value = {
         email: '',
         password: ''
      }
    }
  }
};
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  form {
    width: 250px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .error {
    color: red;
    font-size: 12px;
  }
  .message-success {
    font-size: 14px;
    color: green;
  }
  .message-error {
    font-size: 14px;
    color: red;
  }
</style>
