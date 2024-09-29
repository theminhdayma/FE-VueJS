<template>
  <div>
    <h2>Danh sách User</h2>
    <input 
      type="text" 
      v-model="searchTerm" 
      placeholder="Tìm kiếm tên user"
    />
    <button @click="searchUsers">Tìm kiếm</button>
    
    <h3>Kết quả:</h3>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const users = ref([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }
]);

const searchTerm = ref('');

const filteredUsers = computed(() => {
  return users.value.filter(user => 
    user.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const searchUsers = () => {
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 10px;
}

button {
  margin-left: 5px;
  padding: 10px 20px;
}

ul {
  list-style-type: none;
  padding: 0; 
}
</style>
