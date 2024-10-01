<template>
  <div>
    <h2>Thêm mới tài khoản</h2>
    <form @submit.prevent="register">
      <div>
        <label for="nameUser">Họ và tên</label>
        <input v-model="user.nameUser" id="nameUser" type="text"  />
      </div>
      
      <div>
        <label for="email">Email</label>
        <input v-model="user.email" id="email" type="email"  />
      </div>
      
      <div>
        <label for="password">Mật khẩu</label>
        <input v-model="user.password" id="password" type="password"  />
      </div>
      
      <div>
        <label for="confirmPassword">Nhập lại mật khẩu</label>
        <input v-model="user.confirmPassword" id="confirmPassword" type="password"  />
      </div>
      
      <button type="submit">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Tạo đối tượng product lưu trữ thông tin sản phẩm
const user = reactive({
  nameUser: '',
  email: '',
  password: "",
  confirmPassword: ""
});

// Hàm xử lý sự kiện khi nhấn nút "Thêm mới"
const register = () => {
  console.log(user); // In dữ liệu product ra console
};
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  form {
    width: 250px;
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
</style>
