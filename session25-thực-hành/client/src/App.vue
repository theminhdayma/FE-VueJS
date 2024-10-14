<template>
  <div>
    <div class="w-[600px] mx-auto mt-[100px] bg-white shadow-lg p-6 rounded-lg">
      <div class="flex items-center space-x-2">
        <input
          v-model="newTask"
          class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Thêm công việc"
          type="text"
        />
        <button
          @click="addTask"
          class="w-[100px] bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Thêm
        </button>
      </div>

      <div class="w-full h-[100px] flex justify-around items-center bg-gray-100 rounded-lg mt-4">
        <button class="active border border-black px-4 py-2 rounded-md transition-all">Tất cả</button>
        <button class="border border-black px-4 py-2 rounded-md transition-all">Hoàn thành</button>
        <button class="border border-black px-4 py-2 rounded-md transition-all">Chưa hoàn thành</button>
      </div>

      <div class="overflow-y-auto max-h-[200px] mt-4">
        <ul class="space-y-2">
          <li
            v-for="(task) in tasks"
            :key="task.id"
            class="flex items-center justify-between"
          >
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                class="form-checkbox h-5 w-5 text-blue-600"
                v-model="task.status"
                @change="updateTaskStatus(task)"
              />
              <span :class="{'line-through text-gray-500': task.status}">{{ task.nameJob }}</span>
            </div>
            <div class="flex gap-3">
              <button
                @click="editTask(task)"
                class="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600"
              >
                Sửa
              </button>
              <button
                @click="confirmDeleteTask(task.id)"
                class="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </li>
        </ul>
      </div>

      <div class="mt-4 p-2 bg-gray-100 rounded-md text-center">
        Số công việc hoàn thành:
        <span class="font-bold">{{ completedTasks }}</span>
        /
        <span class="font-bold">{{ tasks.length }}</span>
        công việc
      </div>

      <div class="w-full h-[100px] flex justify-around items-center bg-gray-100 rounded-lg mt-4">
        <button @click="confirmDeleteAllTasks" class="border border-red-500 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">
          Xóa tất cả công việc
        </button>
        <button @click="confirmDeleteCompletedTasks" class="border border-red-500 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">
          Xóa công việc hoàn thành
        </button>
      </div>

      <!-- Modal xác nhận xóa công việc -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-md shadow-lg">
          <p class="mb-4">Bạn có chắc chắn muốn xóa công việc này không?</p>
          <div class="flex justify-end space-x-2">
            <button @click="deleteTask" class="bg-red-500 text-white px-4 py-2 rounded-md">Xóa</button>
            <button @click="showModal = false" class="bg-gray-500 text-white px-4 py-2 rounded-md">Hủy</button>
          </div>
        </div>
      </div>

      <!-- Modal xác nhận xóa tất cả công việc -->
      <div v-if="showDeleteAllModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-md shadow-lg">
          <p class="mb-4">Bạn có chắc chắn muốn xóa tất cả công việc không?</p>
          <div class="flex justify-end space-x-2">
            <button @click="deleteAllTasks" class="bg-red-500 text-white px-4 py-2 rounded-md">Xóa</button>
            <button @click="showDeleteAllModal = false" class="bg-gray-500 text-white px-4 py-2 rounded-md">Hủy</button>
          </div>
        </div>
      </div>

      <!-- Modal xác nhận xóa công việc hoàn thành -->
      <div v-if="showDeleteCompletedModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-md shadow-lg">
          <p class="mb-4">Bạn có chắc chắn muốn xóa tất cả công việc hoàn thành không?</p>
          <div class="flex justify-end space-x-2">
            <button @click="deleteCompletedTasks" class="bg-red-500 text-white px-4 py-2 rounded-md">Xóa</button>
            <button @click="showDeleteCompletedModal = false" class="bg-gray-500 text-white px-4 py-2 rounded-md">Hủy</button>
          </div>
        </div>
      </div>

      <!-- Modal sửa công việc -->
      <div v-if="showEditModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-md shadow-lg">
          <h3 class="mb-4 text-lg font-semibold">Sửa công việc</h3>
          <input
            v-model="editTaskName"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tên công việc"
            type="text"
          />
          <div class="flex justify-end space-x-2 mt-4">
            <button @click="showEditModal = false" class="bg-gray-500 text-white px-4 py-2 rounded-md">Hủy</button>
            <button @click="updateTask()" class="bg-blue-500 text-white px-4 py-2 rounded-md">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import "sweetalert2"

const newTask = ref('');
const tasks = ref([]);
const completedTasks = ref(0);
const showModal = ref(false);
const showDeleteAllModal = ref(false);
const showDeleteCompletedModal = ref(false);
const showEditModal = ref(false); // Trạng thái modal sửa công việc
const editTaskName = ref(''); // Tên công việc được sửa
const taskToDelete = ref(null);
const currentTaskId = ref(null);

const fetchTasks = async () => {
  try {
    const response = await axios.get('http://localhost:8080/jobs');
    tasks.value = response.data;
    updateCompletedTasks();
  } catch (error) {
    console.error(error);
  }
};

const addTask = async () => {
  if (!newTask.value) return;
  try {
    const response = await axios.post('http://localhost:8080/jobs', { nameJob: newTask.value, status: false });
    tasks.value.push(response.data);
    // Swal.fire({
    //   title: "Thêm thành công!",
    //   text: "Công việc đã được thêm!",
    //   icon: "success"
    // });
    newTask.value = '';
    updateCompletedTasks();
  } catch (error) {
    console.error(error);
  }
};

// Cập nhật công việc hiện tại
const updateTask = async () => {
  if (!editTaskName.value || !currentTaskId.value) return;
  try {
    await axios.patch(`http://localhost:8080/jobs/${currentTaskId.value}`, { nameJob: editTaskName.value });
    const taskIndex = tasks.value.findIndex(task => task.id === currentTaskId.value);
    if (taskIndex !== -1) {
      tasks.value[taskIndex].nameJob = editTaskName.value; // Cập nhật công việc trong danh sách
    }
    editTaskName.value = '';
    showEditModal.value = false; // Đóng modal sửa công việc
    currentTaskId.value = null;
  } catch (error) {
    console.error(error);
  }
};

// Cập nhật trạng thái công việc
const updateTaskStatus = async (task) => {
  try {
    await axios.patch(`http://localhost:8080/jobs/${task.id}`, { status: task.status });
    updateCompletedTasks();
  } catch (error) {
    console.error(error);
  }
};

// Lấy số công việc hoàn thành
const updateCompletedTasks = () => {
  completedTasks.value = tasks.value.filter(task => task.status).length;
};

const confirmDeleteTask = (id) => {
  taskToDelete.value = id;
  showModal.value = true;
};

const deleteTask = async () => {
  try {
    await axios.delete(`http://localhost:8080/jobs/${taskToDelete.value}`);
    tasks.value = tasks.value.filter(task => task.id !== taskToDelete.value);
    showModal.value = false;
    updateCompletedTasks();
    taskToDelete.value = null;
  } catch (error) {
    console.error(error);
  }
};

const confirmDeleteAllTasks = () => {
  showDeleteAllModal.value = true;
};

const deleteAllTasks = async () => {
  try {
    await axios.delete('http://localhost:8080/jobs');
    tasks.value = [];
    showDeleteAllModal.value = false;
    updateCompletedTasks();
  } catch (error) {
    console.error(error);
  }
};

const confirmDeleteCompletedTasks = () => {
  showDeleteCompletedModal.value = true;
};

const deleteCompletedTasks = async () => {
  try {
    await axios.delete('http://localhost:8080/jobs');
    tasks.value = tasks.value.filter(task => !task.status);
    showDeleteCompletedModal.value = false;
    updateCompletedTasks();
  } catch (error) {
    console.error(error);
  }
};

const editTask = (task) => {
  editTaskName.value = task.nameJob;
  currentTaskId.value = task.id;
  showEditModal.value = true;
};


onMounted(fetchTasks);
</script>

<style scoped>
.active {
  background-color: rgb(23, 120, 224);
  color: white;
}
</style>
