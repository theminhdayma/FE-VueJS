<template>
  <div>
    <h2>Danh sách công việc</h2>
    <ul>
      <li v-for="item in todoItems" :key="item.id">
        <TodoItem :id="item.id" @delete="handleDelete" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";

const todoItems = ref([
  { id: 1, name: "Công việc 1" },
  { id: 2, name: "Công việc 2" },
  { id: 3, name: "Công việc 3" },
]);

const handleDelete = (id) => {
  todoItems.value = todoItems.value.filter(item => item.id !== id);
};
</script>

<style scoped>

</style>
