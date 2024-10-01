<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <h2>{{ title }}</h2>
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

// Nhận props từ component cha
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

// Khai báo biến để điều khiển việc hiển thị modal
const isVisible = ref(true);

// Phương thức để đóng modal
const closeModal = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
</style>
