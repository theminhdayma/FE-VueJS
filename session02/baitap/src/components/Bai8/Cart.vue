<template>
    <div class="cart">
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
      <div class="cart-item">Cart</div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  .cart {
    width: 100%;
    display: grid;
    background: rgba(215, 216, 211, 0.729);
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 10px;
  }
  
  .cart-item {
    text-align: center;
    background: #c1e109;
    height: 130px;
    line-height: 130px;
  }
  </style>