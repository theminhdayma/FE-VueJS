<template>
    <div>
        <h1>Trang Profile</h1>
        <input type="text" v-model="userName">
        <router-link to="/">Rời trang</router-link>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { onBeforeRouteLeave } from "vue-router";

    const userName = ref("");

    // Đoạn mã bảo vệ route khi người dùng thay đổi dữ liệu nhưng chưa lưu
    onBeforeRouteLeave((to, from, next) => {
        if (userName.value) {
            const inConfirm = confirm("Bạn có chắc chắn muốn rời khỏi trang mà không lưu thay đổi?");
            if (inConfirm) {
                next(); // Cho phép điều hướng nếu người dùng xác nhận
            } else {
                next(false); // Ngăn điều hướng nếu người dùng hủy
            }
        } else {
            next(); // Cho phép điều hướng nếu không có thay đổi
        }
    });
</script>

<style scoped>

</style>
