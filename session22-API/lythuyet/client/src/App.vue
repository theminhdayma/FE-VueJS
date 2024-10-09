<template>
    <div>
      <ul v-for="user in users" :key="user.id">
        <li>{{ user.name }}</li>
        <button @click="handleUpdate(user.id)">Cập nhật</button>
        <button @click="handleDelete(user.id)">Xóa</button>
      </ul>
  
      <button @click="handleAdd">Thêm</button>
    </div>
  </template>
  <script setup>
  import { onMounted, ref } from "vue";
  
  const users = ref([]);
  const getData = async () => {
    const data = await fetch("http://localhost:3000/users");
    const res = await data.json();
    console.log(res);
    users.value = res;
  };
  // getData();
  onMounted(() => {
    getData();
  });
  
  const handleAdd = async () => {
    const newUser = {
      name: "hoang",
    };
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    getData();
  };
  
  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    getData();
  };
  
  const handleUpdate = async (id) => {
    const updateUser = {
      name: "Phương Anh",
    };
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    });
    getData();
  };
  </script>
  <style lang=""></style>