<template>
    <div :class="themeClass">
      <label>
        <input type="checkbox" v-model="isDarkMode" @change="toggleTheme" />
        Dark Mode
      </label>
      <p>Chế độ hiện tại: {{ theme }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const theme = computed(() => store.getters.getTheme);
  const isDarkMode = computed({
    get: () => theme.value === 'dark',
    set: (value) => {
      store.commit('toggleTheme');
    }
  });
  
  const themeClass = computed(() => (theme.value === 'dark' ? 'dark' : 'light'));
  </script>
  
  <style scoped>
  .light {
    background-color: white;
    color: black;
  }
  
  .dark {
    background-color: #333;
    color: white;
  }
  
  label {
    display: flex;
    align-items: center;
  }
  
  input {
    margin-right: 8px;
  }
  </style>
  