<template>
  <div class="ml-[300px] mt-[250px]">
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

<script >

</script>

<style>

</style>