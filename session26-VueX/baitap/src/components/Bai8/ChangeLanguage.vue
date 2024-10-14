<template>
    <div>
      <button @click="toggleLanguage">{{ buttonText }}</button>
      <p>{{ greetingMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  // Lấy trạng thái ngôn ngữ từ Vuex store
  const language = computed(() => store.getters.getLanguage);
  
  // Chuyển đổi ngôn ngữ khi nhấn nút
  const toggleLanguage = () => {
    store.commit('toggleLanguage');
  };
  
  // Hiển thị nội dung dựa trên ngôn ngữ đã chọn
  const buttonText = computed(() => {
    return language.value === 'vi' ? 'Chuyển sang Tiếng Anh' : 'Switch to Vietnamese';
  });
  
  const greetingMessage = computed(() => {
    return language.value === 'vi' ? 'Xin chào! Đây là giao diện Tiếng Việt.' : 'Hello! This is the English interface.';
  });
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p {
    font-size: 18px;
  }
  </style>
  