<template>
    <div class="container">
        <h1>Bài 1</h1>
        <Profile/>
        <br>
        <h1>Bài 2</h1>
        <ListUser/>
        <br>
        <h1>Bài 3</h1>
        <ListProduct/>
        <br>
        <h1>Bài 4</h1>
        <Counter/>
        <br>
        <h1>Bài 5</h1>
        <RandomNumber/>
    </div>
</template>

<script setup>
    import Profile from './components/Bai1/Profile.vue';
    import ListUser from './components/Bai2/ListUser.vue';
    import ListProduct from './components/Bai3/ListProduct.vue';
    import Counter from './components/Bai4/Counter.vue';
    import RandomNumber from './components/Bai5/RandomNumber.vue';
</script>

<style scoped>
    .container {
        margin-top: 100px;
        margin-left: 250px;
    }
</style>