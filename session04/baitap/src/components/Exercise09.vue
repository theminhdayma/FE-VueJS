<template>
  <div>
    <h1>Danh sách bài viết</h1>
    <ul>
      <li v-for="post in products.posts" :key="post.id">
        <h3>ID: {{post.id}} </h3>
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <p>Tác giả: {{ post.author }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const products = reactive({
  posts: [
    { id: 1, title: 'Tại sao nên học ReactJS', content: 'Học ReactJS để đi làm.', author: 'David' },
    { id: 2, title: 'Props trong ReactJS', content: 'Props giúp truyền dữ liệu từ component cha xuống component con.', author: 'Linda' },
    { id: 3, title: 'State trong ReactJS là gi?', content: 'State giúp lưu trạng thái dữ liệu bên trong một component.', author: 'David' }
  ]
});
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
h2 {
  margin: 0;
}
</style>
