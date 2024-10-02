<template>
  <div>
    <h1>Ứng dụng của tôi</h1>
    <CardItem>
      <template #header>
        Thông tin sản phẩm
      </template>
      <template #body>
        Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật và giá cả hợp lý.
      </template>
      <template #footer>
        <button @click="viewDetails">Xem chi tiết</button>
      </template>
    </CardItem>
  </div>
</template>

<script setup>
import CardItem from "./CardItem.vue";

const viewDetails = () => {
  alert("Chi tiết sản phẩm được hiển thị.");
};
</script>

<style scoped>

</style>
