<template>
  <div>
    <h2>Thêm mới sản phẩm</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="productCode">Mã sản phẩm</label>
        <input v-model="product.productCode" id="productCode" type="text" placeholder=""  />
      </div>
      
      <div>
        <label for="productName">Tên sản phẩm</label>
        <input v-model="product.productName" id="productName" type="text" placeholder=""  />
      </div>
      
      <div>
        <label for="price">Giá</label>
        <input v-model="product.price" id="price" type="number" placeholder=""  />
      </div>
      
      <div>
        <label for="quantity">Số lượng</label>
        <input v-model="product.quantity" id="quantity" type="number" placeholder=""  />
      </div>
      
      <button type="submit">Thêm mới</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Tạo đối tượng product lưu trữ thông tin sản phẩm
const product = reactive({
  productCode: '',
  productName: '',
  price: 0,
  quantity: 0
});

// Hàm xử lý sự kiện khi nhấn nút "Thêm mới"
const addProduct = () => {
  console.log(product); // In dữ liệu product ra console
};
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  form {
    width: 250px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
