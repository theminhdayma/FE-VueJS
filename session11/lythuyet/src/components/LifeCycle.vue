<template>
  <div>
    <h1>Lifecycle</h1>
    {{ sayHello() }}
    <ul>
      <li>count1: {{ count1 }}</li>
      <li>count2: {{ count2 }}</li>
    </ul>
    <button @click="handleChange">Increase</button>
    <p>Hàm tính toán bình thường: {{ calculatorC() }}</p>
    <p>Hàm dùng computed: {{ caculatorCount }}</p>
  </div>
</template>

<script setup>
import {
  computed,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
} from "vue";
// const props = defineProps(["count"]);
const count1 = ref(0);
const count2 = ref(0);

onBeforeMount(() => {
  console.log("Hook onBeforeMount được gọi");
});

const sayHello = () => {
  console.log("Hello");
};

onMounted(() => {
  console.log("Hook onMounted được gọi");
  // Nơi gọi API lấy data dữ liệu gắn vào DOM
});

const calculatorC = () => {
  return count1.value ** 2;
};

const caculatorCount = computed(() => {
  return count2.value ** 2;
});

// Giai đoạn update
onBeforeUpdate(() => {
  console.log("Hook onBeforeUpdate được gọi");
});
onUpdated(() => {
  console.log("Hook onUpdated được gọi");
});

onBeforeUnmount(()=> {
    console.log("hook onBeforeUnmount được gọi"); 
})

onUnmounted(()=> {
    console.log("hook onUnmounted được gọi"); 
})

const handleChange = () => {
  count1.value++;
};


/**
  giai đoạn update
  onBeforeUpdate
  onUpdated
 */

 /**
  Giai đoạn unMounting: giai đoạn hủy tức là component 
  được loại bỏ khỏi DOM
  */
</script>

<style></style>