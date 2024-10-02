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

const emit = defineEmits(["delete"]);

const handleDelete = () => {
  emit("delete", props.id);
};
</script>

<style scoped>

</style>
