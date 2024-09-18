<template>
    <div class="card">
      <div class="image">Image</div>
      <div class="title">
        <p>Title</p>
        <button>Add to card</button>
      </div>
    </div>
  </template>
  
  <script></script>
  
  <style>
  .card {
    width: 200px;
    height: 200px;
  }
  
  .card .image {
    height: 50%;
    line-height: 100px;
    text-align: center;
    background: darkgrey;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card .title {
    height: 50%;
    text-align: center;
    border: 1px solid darkgrey;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  button {
    width: 90%;
    height: 30px;
  }
  </style>