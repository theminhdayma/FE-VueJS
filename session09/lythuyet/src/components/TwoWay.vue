<template>
  <div>
    <input type="text" v-model="inputValue" />
    <p>Giá trị inputValue: {{ inputValue }}</p>
    <button @click="handleClick">Click</button>

    <ul>
      My hobby
      <li>
        <input type="checkbox" v-model="hobby" value="Đá bóng" />
        <label for="">Đá bóng</label>
      </li>
      <li>
        <input type="checkbox" v-model="hobby" value="Code" />
        <label for="">Code</label>
      </li>
      <li>
        <input type="checkbox" v-model="hobby" value="Cầu lông" />
        <label for="">Cầu lông</label>
      </li>
    </ul>
    <p>Hobby: {{ hobby }}</p>

    <ul>
      Gendet
      <li>
        <input type="radio" v-model="gender" value="Nam" />
        <label for="">Nam</label>
      </li>
      <li>
        <input type="radio" v-model="gender" value="Nữ" />
        <label for="">Nữ</label>
      </li>
      <li>
        <input type="radio" v-model="gender" value="Khác" />
        <label for="">Khác</label>
      </li>
    </ul>

    <p>Giá trị giới tính được chọn: {{ gender }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("Rikkei");
const gender = ref("Nam");
const hobby = ref([]);
const handleClick = () => {
  inputValue.value = "PTIT K23";
};
</script>

<style></style>