<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center mb-6">Đăng Nhập</h2>
      <form @submit.prevent="login">
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
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
          <input
            v-model="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            id="password"
            placeholder="********"
            type="password"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
          type="submit"
        >
          Login
        </button>
      </form>
      <p class="mt-4 text-sm text-center text-gray-600">
        Don't have an account?
        <router-link to="/home/register" class="text-blue-600 hover:underline">Register here</router-link>
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
const router = useRouter()

const login = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(user => user.email === email.value && user.password === password.value)

  if(email.value==="" || password.value==="") {
    Swal.fire('Warning', 'Vui lòng nhập đủ thông tin', 'warning')
    return
  }

  if (!user) {
    Swal.fire('Error', 'Email hoặc mật khẩu không đúng', 'error')
    return
  }

  // Store logged-in user info in localStorage
  localStorage.setItem('loggedInUser', JSON.stringify(user))

  Swal.fire('Success', 'Đăng nhập thành công', 'success').then(() => {
    router.push('/home')
  })
}
</script>
