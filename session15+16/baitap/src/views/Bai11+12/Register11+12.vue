<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Đăng Ký</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="email">Your email</label>
          <input
            v-model="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="email"
            placeholder="name@company.com"
            type="email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
          <input
            v-model="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="password"
            placeholder="********"
            type="password"
          />
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700" for="confirm-password">Confirm password</label>
          <input
            v-model="confirmPassword"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="confirm-password"
            placeholder="********"
            type="password"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          type="submit"
        >
          Create an account
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Already have an account?
        <router-link to="/home/login" class="text-blue-600 hover:underline">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

const register = () => {
  // Validate email format and password length
  if(email.value==="" || password.value==="" || confirmPassword.value==="") {
    Swal.fire('Warning', 'Vui lòng nhập đủ thông tin', 'warning')
    return
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email.value)) {
    Swal.fire('Error', 'Email không đúng định dạng', 'error')
    return
  }

  if (password.value.length < 8) {
    Swal.fire('Error', 'Mật khẩu phải có ít nhất 8 ký tự', 'error')
    return
  }

  if (password.value !== confirmPassword.value) {
    Swal.fire('Error', 'Mật khẩu xác nhận không khớp', 'error')
    return
  }

  // Check if email is already registered
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  if (users.find(user => user.email === email.value)) {
    Swal.fire('Error', 'Email đã tồn tại', 'error')
    return
  }

  // Store user in localStorage
  users.push({ email: email.value, password: password.value })
  localStorage.setItem('users', JSON.stringify(users))

  Swal.fire('Success', 'Đăng ký thành công', 'success').then(() => {
    router.push('/home/login')
  })
}
</script>
