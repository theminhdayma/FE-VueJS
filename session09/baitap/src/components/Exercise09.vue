<template>
  <div>
    <h2>Đăng ký tài khoản</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Tên sinh viên:</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          placeholder="Nhập tên sinh viên"
          ref="nameInput"
        />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      
      <div>
        <label for="email">Email:</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          placeholder="Nhập email"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      
      <div>
        <label for="password">Mật khẩu:</label>
        <input
          v-model="form.password"
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>

      <div>
        <label for="address">Địa chỉ:</label>
        <input
          v-model="form.address"
          type="text"
          id="address"
          placeholder="Nhập địa chỉ"
        />
      </div>
      
      <button type="submit">Đăng ký</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: '',
  address: ''
});

const errors = ref({
  name: '',
  email: '',
  password: ''
});

const successMessage = ref('');
const nameInput = ref(null);

// Hàm kiểm tra email có tồn tại trong localStorage hay không
const emailExists = (email) => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  return users.some(user => user.email === email);
};

// Hàm xử lý khi submit form
const handleSubmit = () => {
  // Reset errors
  errors.value = {
    name: '',
    email: '',
    password: ''
  };
  successMessage.value = '';

  // Kiểm tra validation
  if (!form.value.name) {
    errors.value.name = 'Tên sinh viên không được để trống.';
  }
  if (!form.value.email) {
    errors.value.email = 'Email không được để trống.';
  } else if (emailExists(form.value.email)) {
    errors.value.email = 'Email đã tồn tại.';
  }
  if (!form.value.password) {
    errors.value.password = 'Mật khẩu không được để trống.';
  }

  // Nếu không có lỗi nào, tiến hành lưu vào localStorage
  if (!errors.value.name && !errors.value.email && !errors.value.password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ ...form.value });
    localStorage.setItem('users', JSON.stringify(users));

    // Xóa hết giá trị trong ô input
    form.value = {
      name: '',
      email: '',
      password: '',
      address: ''
    };

    // Hiển thị thông báo thành công
    successMessage.value = 'Đăng ký tài khoản thành công';

    // Focus vào ô input Tên sinh viên
    nameInput.value.focus();
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
  .success {
    color: green;
    font-size: 14px;
  }
</style>
