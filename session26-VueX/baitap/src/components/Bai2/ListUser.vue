<template>
    <div>
      <table border="1" cellspacing="0" cellpadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.address }}</td>
            <td>
              <button>Sửa</button>
              <button>Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
      import { computed } from 'vue';
      import { useStore } from 'vuex';

      const store = useStore();
      const users = computed(() => store.getters.getUsers);
  
  </script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

th, td {
  padding: 8px;
  border: 1px solid #ddd;
}

button {
  padding: 4px 8px;
  margin: 2px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>