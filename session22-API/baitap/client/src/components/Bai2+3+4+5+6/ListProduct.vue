<template>
    <div>
      <h1>Lấy giữ liệu và hiển thị danh sách sản phẩm ra màn hình console</h1>
      <br>
      <h1>Bài 3</h1>
      <h2>Hiển thị sản phẩm chi tiết</h2>
      <button @click="handleClick">Get Detail</button>
      <br>
      <h1>Bài 4</h1>
      <h2>Xóa 1 sản phẩm theo id</h2>
      <button @click="handleDelete">Delete</button>
      <br>
      <h1>Bài 5</h1>
      <h2>Thêm sản phẩm</h2>
      <button @click="handleCreateProduct">Create Product</button>
      <br>
      <h1>Bài6</h1>
      <h2>Cập nhật sản phẩm</h2>
      <button @click="handleUpdateProduct">Update Product</button>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';

    const products = ref([]);
    // Lấy danh sách sản phẩm
    const getListProduct = async () => {
        const res = await fetch("http://localhost:8080/products")
        const data = await res.json()
        products.value = data      
        console.log(products._rawValue);
    }

    onMounted(()=> {
        getListProduct()
    })

    // Lấy 1 sản phẩm
    const getProductById = async (id) => {
      const res = await fetch(`http://localhost:8080/products/${id}`)
      const data = await res.json()
      return data
    }

    const handleClick = async () => {
      const idProduct = 4
      const productDetail = await getProductById(idProduct)

      if (productDetail) {
        console.log('Sản phẩm:', productDetail);
      } else {
        console.log('Không tìm thấy bản ghi');
      }
    }

    // Xóa 1 sản phẩm
    const deleteProductById = async (id) => {
      try {
        const res = await fetch(`http://localhost:8080/products/${id}`, {
          method: 'DELETE',
        });
        const result = await res.json();
        return result;
      } catch (error) {
        console.error('Lỗi:', error);
      }
    }

    const handleDelete = async () => {
      const idProduct = 2; 
      const result = await deleteProductById(idProduct);
      
      if (result) {
        console.log('Đã xóa sản phẩm có id là: ', idProduct);
      } else {
        console.log('Không thể xóa sản phẩm hoặc sản phẩm không tồn tại');
      }
    };

    // Thêm sản phẩm
    const createProduct = async (product) => {
      try {
        const res = await fetch('http://localhost:8080/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });

        const result = await res.json();
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handleCreateProduct = async () => {
      const product = {
        name: 'Quần đùi ',
        image: 'link ảnh sản phẩm',
        price: "100.000 VND",
        quantity: 120,
      };

      const result = await createProduct(product);

      if (result) {
        console.log('Sản phẩm thêm:', result);
      } else {
        console.log('Không thể tạo sản phẩm');
      }
    };

    // Cập nhật sản phẩm
    const updateProductById = async (id, updatedProduct) => {
      try {
        const res = await fetch(`http://localhost:8080/products/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
        });

        const result = await res.json();
        return result;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const handleUpdateProduct = async () => {
      const updatedProduct = {
        name: 'Sản phẩm mới cập nhật',
        image: 'link ảnh sản phẩm mới cập nhật',
        price: "120.000 VND",
        quantity: 110,
      };

      const productId = 1;
      
      const result = await updateProductById(productId, updatedProduct);

      if (result) {
        console.log('Danh sách sản phẩm sau khi cập nhật:', getListProduct());
      } else {
        console.log('Không thể cập nhật sản phẩm');
      }
    };
    
  </script>
  
  <style>
    
  </style>