<template>
  <div>
    <span>{{ id }}</span>
    <button @click="handleDelete">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Khai báo props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// Khai báo sự kiện delete
const emit = defineEmits(["delete"]);

// Phương thức để phát sự kiện delete kèm theo id
const handleDelete = () => {
  emit("delete", props.id);
};
</script>

<style scoped>
/* Thêm CSS nếu cần */
</style>
