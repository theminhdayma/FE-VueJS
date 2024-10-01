<template>
  <div>
    <h3>Sở thích</h3>
    <label>
      <input type="checkbox" value="Đá bóng" v-model="selectedHobbies">
      Đá bóng
    </label>
    <label>
      <input type="checkbox" value="Đánh cầu" v-model="selectedHobbies">
      Đánh cầu
    </label>
    <label>
      <input type="checkbox" value="Code" v-model="selectedHobbies">
      Code
    </label>
    <label>
      <input type="checkbox" value="Bi a" v-model="selectedHobbies">
      Bi a
    </label>

    <h3>Danh sách sở thích đã chọn: {{ selectedHobbies }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedHobbies = ref([]);
</script>

<style scoped>

label {
  display: block;
  margin-bottom: 5px;
}
</style>
