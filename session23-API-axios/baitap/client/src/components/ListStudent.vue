<template>
    <div class="p-6 relative">
      <!-- Header -->
      <div class="flex justify-between items-center bg-blue-500 text-white p-4 rounded-t">
        <h1 class="text-xl font-semibold">Quản lý sinh viên</h1>
        <button 
          @click="showAddForm = true" 
          class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center"
        >
          <svg 
            class="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          Thêm mới sinh viên
        </button>
      </div>
  
      <!-- Table -->
      <div class="overflow-x-auto border border-gray-200">
        <table class="min-w-full table-auto text-left text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="py-2 px-4 border-b">
                <input type="checkbox">
              </th>
              <th class="py-2 px-4 border-b">Tên sinh viên</th>
              <th class="py-2 px-4 border-b">Email</th>
              <th class="py-2 px-4 border-b">Địa chỉ</th>
              <th class="py-2 px-4 border-b">Số điện thoại</th>
              <th class="py-2 px-4 border-b">Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in listStudent" :key="student.id" class="border-b hover:bg-gray-50">
              <td class="py-2 px-4">
                <input type="checkbox">
              </td>
              <td class="py-2 px-4">{{ student.name }}</td>
              <td class="py-2 px-4">{{ student.email }}</td>
              <td class="py-2 px-4">{{ student.address }}</td>
              <td class="py-2 px-4">{{ student.phone }}</td>
              <td class="py-2 px-4 flex items-center gap-3">
                <button @click="handleEditStudent(student)" class="text-yellow-500 hover:text-yellow-600 mr-2">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button @click="confirmDelete(student.id)" class="text-red-500 hover:text-red-600">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Form thêm/sửa sinh viên -->
      <div v-if="showAddForm" class="fixed top-[100px] left-[600px] z-50 w-[400px] bg-white p-6 mt-4 rounded shadow-md">
        <h2 class="text-lg font-semibold">{{ isEditMode ? 'Sửa thông tin sinh viên' : 'Thêm mới sinh viên' }}</h2>
        <form @submit.prevent="isEditMode ? updateStudent() : addStudent()">
          <div class="mt-4">
            <label class="block">Tên sinh viên:</label>
            <input v-model="newStudent.name" type="text" class="border p-2 w-full" />
            <span class="text-red-500" v-if="errors.name">{{ errors.name }}</span>
          </div>
          <div class="mt-4">
            <label class="block">Email:</label>
            <input v-model="newStudent.email" type="text" class="border p-2 w-full" />
            <span class="text-red-500" v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div class="mt-4">
            <label class="block">Địa chỉ:</label>
            <input v-model="newStudent.address" type="text" class="border p-2 w-full" />
            <span class="text-red-500" v-if="errors.address">{{ errors.address }}</span>
          </div>
          <div class="mt-4">
            <label class="block">Số điện thoại:</label>
            <input 
              v-model="newStudent.phone" 
              type="text" 
              class="border p-2 w-full" 
              @input="validatePhone"
            />
            <span class="text-red-500" v-if="errors.phone">{{ errors.phone }}</span>
          </div>
          <div class="flex justify-end mt-4">
            <button type="button" @click="cancelAdd" class="bg-gray-200 text-black py-2 px-4 rounded mr-2">Hủy</button>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">{{ isEditMode ? 'Lưu' : 'Thêm' }}</button>
          </div>
        </form>
      </div>
  
      <!-- Modal xác nhận xóa -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded shadow-md">
          <h2 class="text-lg font-semibold">Xóa sinh viên</h2>
          <p>Bạn chắc chắn muốn xóa sinh viên này không ?</p>
          <div class="flex justify-end mt-4">
            <button @click="cancelDelete" class="bg-gray-200 text-black py-2 px-4 rounded mr-2">Hủy</button>
            <button @click="deleteStudent" class="bg-red-500 text-white py-2 px-4 rounded">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { ref, onMounted } from "vue";
  
  const listStudent = ref([]);
  const showAddForm = ref(false);
  const showModal = ref(false);
  const studentId = ref(null);
  const newStudent = ref({
    name: '',
    email: '',
    address: '',
    phone: '',
    status: true,
    created_at: new Date().toISOString().split('T')[0]
  });
  const errors = ref({});
  const isEditMode = ref(false); // Track if we are in edit mode
  
  // Hàm gọi API để lấy danh sách sinh viên
  const getAllStudent = async () => {
    try {
      const res = await axios.get("http://localhost:8080/students");
      listStudent.value = res.data;
    } catch (error) {
      console.error("Có lỗi xảy ra khi lấy danh sách sinh viên:", error);
    }
  };
  
  // Hàm xác nhận xóa sinh viên
  const confirmDelete = (id) => {
    studentId.value = id; // Lưu ID sinh viên để xóa
    showModal.value = true; // Hiển thị modal
  };
  
  // Hàm hủy hành động xóa
  const cancelDelete = () => {
    showModal.value = false; // Đóng modal
    studentId.value = null; // Xóa ID sinh viên
  };
  
  // Hàm xóa sinh viên
  const deleteStudent = async () => {
    try {
      await axios.delete(`http://localhost:8080/students/${studentId.value}`); // Gọi API xóa
      cancelDelete(); // Đóng modal
      getAllStudent(); // Render lại danh sách sinh viên mới
    } catch (error) {
      console.error("Có lỗi xảy ra khi xóa sinh viên:", error);
    }
  };
  
  // Hàm thêm sinh viên
  const addStudent = async () => {
    if (validateInputs()) {
      try {
        await axios.post("http://localhost:8080/students", newStudent.value);
        showAddForm.value = false; // Đóng form thêm mới
        getAllStudent(); // Render lại danh sách sinh viên mới
        resetForm(); // Đặt lại dữ liệu
      } catch (error) {
        console.error("Có lỗi xảy ra khi thêm sinh viên:", error);
      }
    }
  };
  
  // Hàm sửa sinh viên
  const updateStudent = async () => {
    if (validateInputs()) {
      try {
        await axios.patch(`http://localhost:8080/students/${studentId.value}`, newStudent.value); // Gọi API cập nhật
        showAddForm.value = false; // Đóng form sửa
        getAllStudent(); // Render lại danh sách sinh viên mới
        resetForm(); // Đặt lại dữ liệu
        isEditMode.value = false; // Reset trạng thái chỉnh sửa
      } catch (error) {
        console.error("Có lỗi xảy ra khi cập nhật sinh viên:", error);
      }
    }
  };
  
  // Hàm xử lý khi nhấn nút sửa
  const handleEditStudent = (student) => {
    newStudent.value = { ...student }; // Copy thông tin sinh viên vào form
    studentId.value = student.id; // Lưu ID sinh viên
    showAddForm.value = true; // Hiển thị form
    isEditMode.value = true; // Chuyển sang chế độ sửa
  };
  
  // Hàm hủy bỏ thêm/sửa
  const cancelAdd = () => {
    showAddForm.value = false; // Đóng form
    resetForm(); // Đặt lại dữ liệu
  };
  
  // Hàm kiểm tra định dạng số điện thoại
  const validatePhone = () => {
    const phoneRegex = /^[0-9]{10}$/; // Định dạng số điện thoại (10 chữ số)
    if (!phoneRegex.test(newStudent.value.phone)) {
      errors.value.phone = "Số điện thoại không hợp lệ (10 chữ số).";
    } else {
      delete errors.value.phone; // Xóa lỗi nếu hợp lệ
    }
  };
  
  // Hàm kiểm tra định dạng email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Định dạng email hợp lệ
    if (!emailRegex.test(newStudent.value.email)) {
      errors.value.email = "Email không hợp lệ.";
    } else {
      // Kiểm tra email đã tồn tại trong danh sách
      const emailExists = listStudent.value.some(student => student.email === newStudent.value.email);
      if (emailExists) {
        errors.value.email = "Email đã tồn tại.";
      } else {
        delete errors.value.email; // Xóa lỗi nếu hợp lệ
      }
    }
  };
  
  // Hàm kiểm tra dữ liệu đầu vào
  const validateInputs = () => {
    errors.value = {}; // Đặt lại lỗi trước khi kiểm tra
  
    if (!newStudent.value.name) {
      errors.value.name = "Tên sinh viên là bắt buộc.";
    }
    if (!newStudent.value.email) {
      errors.value.email = "Email là bắt buộc.";
    }
    if (!newStudent.value.address) {
      errors.value.address = "Địa chỉ là bắt buộc.";
    }
    validatePhone(); // Kiểm tra số điện thoại
    validateEmail(); // Kiểm tra email
  
    return Object.keys(errors.value).length === 0; // Trả về true nếu không có lỗi
  };
  
  // Hàm đặt lại dữ liệu trong form
  const resetForm = () => {
    newStudent.value = {
      name: '',
      email: '',
      address: '',
      phone: '',
      status: true,
      created_at: new Date().toISOString().split('T')[0]
    };
    errors.value = {}; // Đặt lại lỗi
  };
  
  // Khởi tạo danh sách sinh viên
  onMounted(() => {
    getAllStudent(); // Gọi hàm lấy danh sách sinh viên khi component được khởi tạo
  });
  </script>
  
  <style scoped>
  /* Style for the student management component */
  </style>
  