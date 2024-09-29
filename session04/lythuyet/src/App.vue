<template>
  <div>
    <h1>Ref, Reactive, Computed, Watcher</h1>
    <p>Giá trị biến count: {{ count }}</p>
    <button @click="handleClick">Click</button>
    <p>Name: {{ userInfo.name }}</p>
    <p>Addres: {{ userInfo.address }}</p>
    <button @click="handleChange">Change Info</button>
    <p>Computed</p>
    <p>Giá trị biến count khi x2: {{ numberCount }}</p>
    <p>Giá trị biến count khi ^2: {{ calculator }}</p>
    <button @click="handleIncrease">Click</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const count = ref([1, 2, 3, 4]);
const numberCount = ref(5);
const handleClick = () => {
  count.value.push(6);
};
const userInfo = ref({
  name: "Nguyễn Thế Minh",
  address: "Hà Nội",
});
const user = reactive({
  name: "Minh Sâm",
  age: 18,
  address: "hà Nội",
});
const handleChange = () => {
  userInfo.value.address = "Cà Mau";
  userInfo.value.name = "Minh Sâm";
};
const handleIncrease = () => {
  numberCount.value *= 2;
};

const calculator = computed(() => numberCount.value ** 2);
</script>

<style></style>