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
        <br>
        <h1>Bài 6</h1>
        <ChangeState/>
        <br>
        <h1>Bài 7</h1>
        <DarkMode/>
        <br>
        <h1>Bài 8</h1>
        <ChangeLanguage/>
        <br>
    </div>
</template>

<script setup>
    import Profile from './components/Bai1/Profile.vue';
    import ListUser from './components/Bai2/ListUser.vue';
    import ListProduct from './components/Bai3/ListProduct.vue';
    import Counter from './components/Bai4/Counter.vue';
    import RandomNumber from './components/Bai5/RandomNumber.vue';
    import ChangeState from './components/Bai6/ChangeState.vue';
    import DarkMode from './components/Bai7/DarkMode.vue';
    import ChangeLanguage from './components/Bai8/ChangeLanguage.vue';
</script>

<style scoped>
    .container {
        margin-top: 100px;
        margin-left: 250px;
    }
</style>