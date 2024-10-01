<template>
  <div class="w-[80%] m-auto mt-4 h-[100vh]">
    <main class="main">
      <header class="d-flex justify-content-between mb-3">
        <h3>Nhân viên</h3>
        <button class="btn btn-primary p-2" @click="openAddForm">Thêm mới nhân viên</button>
      </header>

      <table class="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Trạng thái</th>
            <th colSpan="3">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.dob }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.address }}</td>
            <td>
              <span v-if="employee.active" class="status-active">Đang hoạt động</span>
              <span v-else class="status-stop">Ngừng hoạt động</span>
            </td>
            <td>
              <button class="button button-block" @click="confirmToggleStatus(index)">
                {{ employee.active ? 'Chặn' : 'Bỏ chặn' }}
              </button>
            </td>
            <td>
              <button class="button button-edit" @click="editEmployee(index)">Sửa</button>
            </td>
            <td>
              <button class="button button-delete" @click="deleteEmployee(index)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>

    <!-- Form thêm mới nhân viên -->
    <div v-if="showForm" class="overlay">
      <form class="form" @submit.prevent="addEmployee">
        <div class="d-flex justify-content-between align-items-center">
          <h4>Thêm mới nhân viên</h4>
          <i class="fa-solid fa-xmark" @click="closeForm"></i>
        </div>
        <div>
          <label class="form-label" for="name">Họ và tên</label>
          <input class="form-control" id="name" v-model="form.name" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div>
          <label class="form-label" for="dob">Ngày sinh</label>
          <input class="form-control" id="dob" type="date" v-model="form.dob" />
          <span v-if="errors.dob" class="error">{{ errors.dob }}</span>
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input class="form-control" id="email" v-model="form.email" />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea class="form-control" id="address" rows="3" v-model="form.address"></textarea>
        </div>
        <div>
          <label class="form-label">Trạng thái</label>
          <select class="form-control" v-model="form.active">
            <option :value="true">Đang hoạt động</option>
            <option :value="false">Ngừng hoạt động</option>
          </select>
        </div>
        <div>
          <button class="w-100 btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>

    <!-- Modal xác nhận chặn/bỏ chặn -->
    <div class="p-3">
      <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <div class="flex justify-between items-center mb-4">
            <h4 class="text-lg font-semibold">Cảnh báo</h4>
            <button @click="cancelAction" class="text-gray-500 hover:text-gray-800">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <p class="mb-4">Bạn có chắc chắn muốn chặn tài khoản này?</p>
          <div class="flex justify-end space-x-4">
            <button
              @click="cancelAction"
              class="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200"
            >
              Hủy
            </button>
            <button
              @click="confirmAction"
              class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Khai báo các biến cần thiết
const showForm = ref(false);
const showConfirmModal = ref(false);
const form = ref({
  name: '',
  dob: '',
  email: '',
  address: '',
  active: true,
});
const employees = ref([]);
const errors = ref({});
const editIndex = ref(null);
const currentAction = ref('Chặn'); 
const currentEmployeeIndex = ref(null);

onMounted(() => {
  loadEmployees();
});

// Hàm mở form thêm nhân viên
const openAddForm = () => {
  showForm.value = true;
  editIndex.value = null;
  resetForm();
};

// Hàm đóng form
const closeForm = () => {
  showForm.value = false;
  resetForm();
};

// Hàm tải nhân viên từ localStorage
const loadEmployees = () => {
  const storedEmployees = localStorage.getItem('employees');
  if (storedEmployees) {
    employees.value = JSON.parse(storedEmployees);
  }
};

// Hàm thêm nhân viên
const addEmployee = () => {
  if (validateForm()) {
    employees.value.push({ ...form.value });
    localStorage.setItem('employees', JSON.stringify(employees.value));
    closeForm();
  }
};

// Hàm xác nhận chặn/bỏ chặn
const confirmToggleStatus = (index) => {
  currentEmployeeIndex.value = index;
  currentAction.value = employees.value[index].active ? 'chặn' : 'bỏ chặn';
  showConfirmModal.value = true;
};

// Hàm thực hiện hành động chặn/bỏ chặn
const confirmAction = () => {
  employees.value[currentEmployeeIndex.value].active = !employees.value[currentEmployeeIndex.value].active;
  localStorage.setItem('employees', JSON.stringify(employees.value));
  showConfirmModal.value = false;
};

// Hàm hủy hành động
const cancelAction = () => {
  showConfirmModal.value = false;
};

// Hàm chỉnh sửa nhân viên
const editEmployee = (index) => {
  form.value = { ...employees.value[index] };
  editIndex.value = index;
  showForm.value = true;
};

// Hàm xóa nhân viên
const deleteEmployee = (index) => {
  if (confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
    employees.value.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees.value));
  }
};

// Hàm xác thực form
const validateForm = () => {
  errors.value = {};

  if (!form.value.name) {
    errors.value.name = 'Họ và tên không được để trống.';
  }

  if (!form.value.email) {
    errors.value.email = 'Email không được để trống.';
  } else if (!validEmail(form.value.email)) {
    errors.value.email = 'Email không đúng định dạng.';
  }

  if (!form.value.dob) {
    errors.value.dob = 'Ngày sinh không được để trống.';
  } else if (new Date(form.value.dob) > new Date()) {
    errors.value.dob = 'Ngày sinh không được lớn hơn ngày hiện tại.';
  }

  return Object.keys(errors.value).length === 0;
};

// Hàm kiểm tra email hợp lệ
const validEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Hàm đặt lại form
const resetForm = () => {
  form.value = {
    name: '',
    dob: '',
    email: '',
    address: '',
    active: true,
  };
  errors.value = {};
};
</script>



<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.form-control {
  width: 350px;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 14px;
  font-family: sans-serif;
}

.fa-arrows-rotate {
  font-size: 20px;
  cursor: pointer;
  color: gray;
}

.fa-arrows-rotate:hover {
  color: rgb(184, 180, 180);
  transform: rotate(20deg);
  transition: all 0.5s linear;
}

.button {
  padding: 4px 12px;
  line-height: 30px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

.button-edit {
  background-color: orange;
}

.button-delete {
  background-color: red;
}

.button-block {
  background-color: green;
}

td:first-child,
td:nth-child(6),
td:nth-child(7) {
  text-align: center;
}

.form-select {
  width: 270px !important;
}

.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  background-color: #fff;
  width: 500px;
  padding: 20px 24px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-label {
  font-weight: 600;
  margin-bottom: 8px;
}

.fa-xmark {
  font-size: 20px;
  cursor: pointer;
}

.error {
  color: red !important;
}

.status-container {
  border: 1px solid #dadada;
  padding: 4px 8px;
  border-radius: 4px;
}

.status {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid transparent;
}

.modal-custom {
  background-color: #fff;
  padding: 20px 24px;
  border-radius: 4px;
  width: 400px;
}

.modal-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-body-custom {
  padding: 20px 0;
}

.modal-footer-custom {
  display: flex;
  justify-content: end;
  gap: 8px;
}

.pagination {
  margin-bottom: 0;
}
.status-active {
  color: green;
}
.status-stop {
  color: red;
}
</style>
