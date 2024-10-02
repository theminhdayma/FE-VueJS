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

    <div v-if="showForm" class="overlay">
      <form class="form" @submit.prevent="addEmployee">
        <div class="d-flex justify-content-between align-items-center">
          <h4>{{ editIndex !== null ? 'Sửa nhân viên' : 'Thêm mới nhân viên' }}</h4>
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
          <button class="w-100 btn btn-primary">
            {{ editIndex !== null ? 'Cập nhật' : 'Thêm mới' }}
          </button>
        </div>
      </form>
    </div>

    <div v-if="showConfirmModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h4 class="text-lg font-semibold">Cảnh báo</h4>
          <button @click="cancelAction" class="text-gray-500 hover:text-gray-800">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <p class="mb-4">Bạn có chắc chắn muốn {{ currentAction }} tài khoản này?</p>
        <div class="flex justify-end space-x-4">
          <button @click="cancelAction" class="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 transition duration-200">
            Hủy
          </button>
          <button @click="confirmAction" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showForm = ref(false);
const showConfirmModal = ref(false);
const form = ref({
  name: '',
  dob: '',
  email: '',
  address: '',
  active: true,
});
const employees = ref(JSON.parse(localStorage.getItem('employees')) || []);
const errors = ref({});
const editIndex = ref(null);
const currentAction = ref('Chặn');
const currentEmployeeIndex = ref(null);

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

// Hàm thêm hoặc cập nhật nhân viên
const addEmployee = () => {
  if (validateForm()) {
    if (editIndex.value !== null) {
      employees.value[editIndex.value] = { ...form.value };
    } else {
      employees.value.push({ ...form.value });
    }
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
  currentEmployeeIndex.value = index;
  showConfirmModal.value = true;
  currentAction.value = 'xóa';
};

const confirmDeleteAction = () => {
  employees.value.splice(currentEmployeeIndex.value, 1);
  localStorage.setItem('employees', JSON.stringify(employees.value));
  showConfirmModal.value = false;
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
.table {
  width: 100%;
  border: 1px solid #ccc;
}

.form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 400px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.button-edit {
  background-color: #ffc107;
}

.button-delete {
  background-color: #dc3545;
}

.error {
  color: red;
}

.status-active {
  color: green;
}

.status-stop {
  color: red;
}
</style>
