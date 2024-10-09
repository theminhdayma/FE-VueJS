<template>
    <div class="product-list">
      <div class="gicungduoc">
        <button class="btn btn-primary" @click="showForm = true">Thêm mới sản phẩm</button>
        <select @change="sortProducts" id="sortSelect">
          <option value="">--Chọn thời gian--</option>
          <option value="recent">Gần nhất</option>
          <option value="oldest">Xa nhất</option>
        </select>
      </div>
      <br />
      <div v-if="showForm" class="form-container">
        <h3>{{ isEdit ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm' }}</h3>
        <label>Tên sản phẩm</label>
        <input placeholder="Tên sản phẩm" type="text" v-model="newProduct.name" />
  
        <label>Hình ảnh (url)</label>
        <input placeholder="url ảnh sản phẩm" type="text" v-model="newProduct.image" />
  
        <label>Giá</label>
        <input placeholder="giá sản phẩm / 1kg" type="text" v-model="newProduct.price" />
  
        <label>Số lượng</label>
        <input placeholder="số lượng sản phẩm" type="number" v-model="newProduct.quantity" />
  
        <button class="btn btn-secondary" @click="cancel">Hủy</button>
        <button class="btn btn-primary" @click="isEdit ? updateProduct() : saveProduct">Lưu</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </div>
      <br />
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img :src="product.image" alt="Product image" class="product-image" />
            </td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.dateAdded }}</td>
            <td class="action">
              <button class="btn btn-warning" @click="editProduct(product)">Sửa</button>
              <button class="btn btn-danger" @click="handleDelete(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const products = ref([]);
  
  const newProduct = ref({
    id: null,
    name: '',
    image: '',
    price: '',
    dateAdded: new Date().toISOString().split('T')[0],
    quantity: 0,
  });
  
  const showForm = ref(false);
  const errorMessage = ref('');
  const isEdit = ref(false);
  
  const getProducts = async () => {
    try {
      const res = await fetch("http://localhost:8080/TableProduct");
      if (!res.ok) {
        throw new Error('Lỗi khi lấy dữ liệu');
      }
      const data = await res.json();
      products.value = data;
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    getProducts();
  });
  
  // Hàm hủy công việc
  const cancel = () => {
    showForm.value = false;
    resetForm();
  };
  
  // Hàm lưu sản phẩm
  const saveProduct = async () => {
    if (!newProduct.value.name || !newProduct.value.image || !newProduct.value.price || !newProduct.value.quantity) {
      errorMessage.value = 'Các trường không được để trống!';
      return;
    }
  
    const isDuplicate = products.value.some(product => product.name === newProduct.value.name);
    if (isDuplicate) {
      errorMessage.value = 'Tên sản phẩm đã tồn tại!';
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/TableProduct", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct.value)
      });
  
      if (res.ok) {
        console.log('Sản phẩm đã được thêm mới.');
        cancel(); 
        getProducts(); 
      } else {
        console.error('Lỗi khi thêm sản phẩm');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Hàm cập nhật sản phẩm
  const updateProduct = async () => {
    if (!newProduct.value.name || !newProduct.value.image || !newProduct.value.price || !newProduct.value.quantity) {
      errorMessage.value = 'Các trường không được để trống!';
      return;
    }
  
    try {
      const res = await fetch(`http://localhost:8080/TableProduct/${newProduct.value.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct.value)
      });
  
      if (res.ok) {
        console.log('Sản phẩm đã được cập nhật.');
        cancel(); 
        getProducts(); 
      } else {
        console.error('Lỗi khi cập nhật sản phẩm');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Hàm sửa sản phẩm
  const editProduct = (product) => {
    newProduct.value = { ...product };
    showForm.value = true;
    isEdit.value = true;
  };
  
  // Hàm xóa sản phẩm
  const handleDelete = async (id) => {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmation) {
      try {
        const res = await fetch(`http://localhost:8080/TableProduct/${id}`, {
          method: 'DELETE'
        });
  
        if (res.ok) {
          console.log(`Sản phẩm với ID ${id} đã được xóa.`);
          getProducts();
        } else {
          console.error("Lỗi khi xóa sản phẩm");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Hủy hành động xóa.');
    }
  };
  
  // Hàm reset form
  const resetForm = () => {
    newProduct.value = { id: null, name: '', image: '', price: '', dateAdded: new Date().toISOString().split('T')[0], quantity: 0 };
    errorMessage.value = '';
    isEdit.value = false; 
  };
  
  // Hàm sắp xếp sản phẩm
  const sortProducts = (event) => {
    const sortBy = event.target.value;
  
    if (sortBy === 'recent') {
      products.value.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortBy === 'oldest') {
      products.value.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    }
  };
  </script>
  
  <style scoped>
  .product-list {
    margin: 20px;
  }

  .gicungduoc {
    display: flex;
    justify-content: space-between;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 10px;
    text-align: center;
  }
  
  .table th {
    background-color: #f8f9fa;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
  }
  
  .btn {
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .btn-primary {
    background-color: blue;
    color: white;
    border: none;
  }
  
  .btn-warning {
    background-color: orange;
    color: white;
    border: none;
  }
  
  .btn-danger {
    background-color: red;
    color: white;
    border: none;
  }
  
  .btn-secondary {
    background-color: grey;
    color: white;
    border: none;
  }
  
  .btn:hover {
    opacity: 0.8;
  }
  
  .action {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  .form-container {
    width: 400px;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .form-container h3 {
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }
  
  .form-container label {
    font-weight: bold;
    margin-top: 10px;
    display: block;
  }
  
  .form-container input[type="text"],
  .form-container input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  
  .form-container input[type="text"]:focus,
  .form-container input[type="number"]:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  </style>
  