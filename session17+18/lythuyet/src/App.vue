<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="about">About</router-link>
      <router-link to="contact">Contact</router-link>
    </nav>
    <router-view v-slot="{Component}">
      <Suspense>
        <!-- Thành phần các component sử dụng cơ chế load  -->
        <template #default>
          <component :is="Component"></component>
        </template>
        <!-- Hiệu ứng loading trước khi tải trang  -->
        <template #falback>
          <div>loading...</div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
  nav {
    position: sticky;
    top: 0;
  }
</style>