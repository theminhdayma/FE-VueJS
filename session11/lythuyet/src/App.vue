<template>
  <div>
    <h1>Lifecycle !</h1>

    <!--
      React:
        1. Khởi tạo create: Khởi tạo state, props
        2. mount: gắn kết đưa vào DOM
        3. update: quá trình thay đổi cập nhật state (re-render)
        4. unmount: Loại bỏ khỏi DOM

        VueJS cũng tương tự gồm 4 giai đoạn
        Khởi tạo - gắn kết - chỉnh sửa - kết thúc
     -->
     <LifeCycle ></LifeCycle>
     <button @click="unMountComponent">Click - unMounting</button>
  </div>
</template>

<script setup>
  import LifeCycle from "./components/LifeCycle.vue"
  import { ref} from "vue";
  const isShow = ref(0)

  const unMountComponent = () => {
    
  }
</script>

<style scoped>

</style>