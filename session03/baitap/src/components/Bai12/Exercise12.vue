<template>
  <div>
    <button @click="changeImage">Change image</button>
    <div>
      <img :src="currentImage" alt="Random Image"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mảng chứa đường dẫn của 4 hình ảnh ngẫu nhiên
const images = [
  'https://i.pinimg.com/736x/11/e4/4d/11e44d85743b28fa62121b5ae71a914b.jpg',
  'https://bedental.vn/wp-content/uploads/2022/12/Anh-Avatar-Doremon-dep-ngau-cute.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAOSqbcFcrd5eQdbuwk_GOrUONLC-jdM1mbw&s',
  'https://i.pinimg.com/736x/fb/a7/8f/fba78fbad5a3e84b735f6ffb79de4f62.jpg'
];

const currentImage = ref(images[0]);

const changeImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage.value = images[randomIndex];
};
</script>

<style scoped>
img {
  width: 300px;
  height: 200px;
  margin-top: 10px;
}
</style>
