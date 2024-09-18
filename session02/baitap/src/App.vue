
<template>
  <div>
    <h1>Bài 1</h1>
    <Bai1/>
    <br>
    <h1>Bai 2</h1>
    <Bai2/>
    <br>
    <h1>Bài 3</h1>
    <Bai3/>
    <br>
    <h1>Bài 4</h1>
    <Bai4/>
    <br>
    <h1>Bài 5</h1>
    <Bai5/>
    <br>
    <h1>Bài 6</h1>
    <Bai6/>
    <br>
    <h1>Bài 7</h1>
    <div class="home">
      <Header />
      <div class="between">
        <Menu />
        <div class="main-footer">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
    <br>
    <h1>Bài 8</h1>
    <div class="home">
      <Header2 />
      <Navbar />
      <div class="body">
        <Menu2 />
        <Cart />
        <Article />
      </div>
    </div>
    <br>
    <h1>Bài 9</h1>
    <Bai9/>
    <br>
    <h1>Bài 10</h1>
    <Bai10/>
    <br>
    <h1>Bài 11</h1>
    <div class="flex">
      <div class="w-2/3 p-4">
        <ListCart />
      </div>
      <div class="w-1/3 p-4">
        <Checkout />
      </div>
    </div>
    <br>
    <h1>Bài 12</h1>
    <OverviewModal/>
    <br><br><br>
  </div>
  
</template>

<script setup>
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';
import Bai5 from './components/Bai5.vue';
import Bai6 from './components/Bai6.vue';
import Header from './components/Bai7/Header.vue';
import Footer from './components/Bai7/Footer.vue';
import Main from './components/Bai7/Main.vue';
import Menu from './components/Bai7/Menu.vue';
import Menu2 from './components/Bai8/Menu.vue';
import Header2 from './components/Bai8/Header.vue';
import Navbar from './components/Bai8/Navbar.vue';
import Article from './components/Bai8/Article.vue';
import Cart from './components/Bai8/Cart.vue';
import Bai9 from './components/Bai9.vue';
import Bai10 from './components/Bai10.vue';
import ListCart from './components/Bai11/ListCart.vue';
import Checkout from './components/Bai11/Checkout1.vue';
import OverviewModal from './components/Bai12/OverviewModal.vue';

</script>
<style>
.between {
  display: flex;
}

.main-footer {
  width: 85%;
  background: rgb(210, 210, 210);
  padding: 30px;
  height: 90vh;
}

.body {
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f9;
  display: flex;
  justify-content: space-between;
}
</style>
