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
          Add Job
        </button>
      </div>

      <ul class="mt-4 space-y-2">
        <li
          v-for="(task, index) in tasks"
          :key="task.id"
          class="flex items-center justify-between"
        >
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-blue-600"
              v-model="task.status"
              @change="saveTasks"
            />
            <span :class="{'line-through text-gray-500': task.status}">
              {{ task.name }}
            </span>
          </div>
          <button
            @click="confirmDeleteTask(index)"
            class="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      </ul>

      <div class="mt-4 p-2 bg-gray-100 rounded-md text-center">
        Số công việc hoàn thành:
        <span class="font-bold">{{ completedTasks }}</span>
        /
        <span class="font-bold">{{ tasks.length }}</span>
        công việc
      </div>

      <!-- Modal xác nhận xóa công việc  -->
      <div v-if="showModal" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white p-4 rounded-md shadow-lg">
          <p class="mb-4">Bạn có chắc chắn muốn xóa công việc này không?</p>
          <div class="flex justify-end space-x-2">
            <button @click="deleteTask" class="bg-red-500 text-white px-4 py-2 rounded-md">
              Xóa
            </button>
            <button @click="showModal = false" class="bg-gray-500 text-white px-4 py-2 rounded-md">
              Hủy
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

// biến lưu tên công việc mới
const newTask = ref('');

// Mảng lưu tất cả các công việc
const tasks = reactive([]);

// Biến dùng ẩn hiện modal xác nhận xóa
const showModal = ref(false);
// Biến tạm lưu lại công việc cần xóa
let taskToDelete = null;

// Hàm tính số công việc đã hoàn thành 
const completedTasks = computed(() => tasks.filter(task => task.status).length);

// Lấy lại danh sách công việc từ local khi tải trang
const loadTasks = () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  storedTasks.forEach(task => tasks.push(task));
};

// Lưu danh sách công việc lên local
const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Hàm thêm công việc
const addTask = () => {
  if (newTask.value.trim() === '') {
    alert('Tên công việc không được để trống!');
    return;
  }
  if (tasks.some(task => task.name === newTask.value.trim())) {
    alert('Công việc đã tồn tại!');
    return;
  }
  // Tạo 1 obj công việc mới
  tasks.push({
    id: Date.now(),
    name: newTask.value.trim(),
    status: false
  });
  newTask.value = '';
  
  saveTasks(); 
};

// Hàm hiển thị modal xác nhận xóa
const confirmDeleteTask = (index) => {
  showModal.value = true;
  taskToDelete = index;
};

// Hàm xóa công việc
const deleteTask = () => {
  tasks.splice(taskToDelete, 1);
  saveTasks();
  showModal.value = false;
};

loadTasks();

</script>

<style scoped>

</style>
