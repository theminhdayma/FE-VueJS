<template>
  <div>
    <button 
      v-for="index in 3" 
      :key="index" 
      :class="{ active: state.activeIndex === index }" 
      @click="setActiveIndex(index)"
    >
      Button {{ index }}
    </button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  activeIndex: 1
});

const setActiveIndex = (index) => {
  state.activeIndex = index;
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.active {
  background-color: red; 
  color: #fff;
}
</style>
