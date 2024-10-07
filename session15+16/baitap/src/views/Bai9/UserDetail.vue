<template>
  <div v-if="user">
    <h2 class="text-2xl font-bold">Thông tin chi tiết</h2>
    <div class="p-6 bg-gray-100 shadow-md max-w-md">
        <ul class="mb-4 p-4 bg-white rounded-lg shadow">
            <li class="font-semibold text-lg mb-2">ID: {{ user.id }}</li>
            <li class="font-semibold text-lg mb-2">Tên: {{ user.name }}</li>
            <li class="font-semibold text-lg mb-2">Email: {{ user.email }}</li>
            <li class="font-semibold text-lg mb-2">Địa chỉ: {{ user.address }}</li>
        </ul>
        <router-link to="/listUser">
            <button class="p-3 w-full flex justify-center items-center text-xl border border-gray-700">Quay lại</button>
        </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const users = ref([
  { id: 1, name: "Nguyễn Thế Minh", email: "theminh2005z@gmail.com", address: "Hà Nội" },
  { id: 2, name: "Trần Thị Minh Sâm", email: "minhsam@gmail.com", address: "Hà Nội" },
  { id: 3, name: "Trần Nho Hà", email: "nhoha2005@gmail.com", address: "Hà Nội" }
]);

const user = ref(null)

watch(() => route.params.id, (id) => {
  user.value = users.value.find(u => u.id === Number(id))
}, { immediate: true })
</script>

<style scoped>
button {
  margin-top: 20px;
}
</style>
