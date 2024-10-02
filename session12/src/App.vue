<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Quản lý mượn trả sách</h1>
    <div class="mb-4 flex justify-between items-center">
      <div>
        <label class="mr-2" htmlFor="statusFilter">Lọc theo trạng thái:</label>
        <select class="border border-gray-300 rounded p-2" id="statusFilter" v-model="filterStatus">
          <option value="all">Tất cả</option>
          <option value="returned">Đã trả</option>
          <option value="notReturned">Chưa trả</option>
        </select>
      </div>
      <button @click="openModal('add')" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Thêm thông tin
      </button>
    </div>

    <table class="min-w-full border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-2">STT</th>
          <th class="border border-gray-300 p-2">Tên sách</th>
          <th class="border border-gray-300 p-2">Sinh viên mượn</th>
          <th class="border border-gray-300 p-2">Ngày mượn</th>
          <th class="border border-gray-300 p-2">Ngày trả</th>
          <th class="border border-gray-300 p-2">Trạng thái</th>
          <th class="border border-gray-300 p-2">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in filteredBooks" :key="index">
          <td class="border border-gray-300 p-2">{{ index + 1 }}</td>
          <td class="border border-gray-300 p-2">{{ book.title }}</td>
          <td class="border border-gray-300 p-2">{{ book.student }}</td>
          <td class="border border-gray-300 p-2">{{ formatDate(book.borrowedDate) }}</td>
          <td class="border border-gray-300 p-2">{{ formatDate(book.returnDate) }}</td>
          <td class="border border-gray-300 p-2">
            <span :class="book.status === 'returned' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'" class="py-1 px-2 rounded">
              {{ book.status === 'returned' ? 'Đã trả' : 'Chưa trả' }}
            </span>
          </td>
          <td class="border border-gray-300 p-2">
            <button @click="openModal('edit', index)" class="bg-yellow-500 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-600 transition">Sửa</button>
            <button @click="confirmDelete(index)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition">Xóa</button>
          </td>
        </tr>
        <tr v-if="filteredBooks.length === 0">
          <td colspan="7" class="text-center p-4">Không có dữ liệu hiển thị.</td>
        </tr>
      </tbody>
    </table>

    <!-- Modal thêm hoặc chỉnh sửa thông tin -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">{{ modalMode === 'add' ? 'Thêm sách mới' : 'Chỉnh sửa sách' }}</h2>
        <div>
          <label class="block mb-1">Tên sách:</label>
          <input v-model="newBook.title" type="text" class="border border-gray-300 rounded p-2 w-full" />
          <span v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</span>
        </div>
        <div class="mt-2">
          <label class="block mb-1">Sinh viên mượn:</label>
          <input v-model="newBook.student" type="text" class="border border-gray-300 rounded p-2 w-full" />
          <span v-if="errors.student" class="text-red-500 text-sm">{{ errors.student }}</span>
        </div>
        <div class="mt-2">
          <label class="block mb-1">Ngày mượn:</label>
          <input
            v-model="newBook.borrowedDate"
            type="date"
            class="border border-gray-300 rounded p-2 w-full"
            :min="today"
          />
          <span v-if="errors.borrowedDate" class="text-red-500 text-sm">{{ errors.borrowedDate }}</span>
        </div>
        <div class="mt-2">
          <label class="block mb-1">Ngày trả:</label>
          <input
            v-model="newBook.returnDate"
            type="date"
            class="border border-gray-300 rounded p-2 w-full"
            :min="newBook.borrowedDate || today"
          />
          <span v-if="errors.returnDate" class="text-red-500 text-sm">{{ errors.returnDate }}</span>
        </div>
        <div class="mt-2">
          <label class="block mb-1">Trạng thái:</label>
          <select v-model="newBook.status" class="border border-gray-300 rounded p-2 w-full">
            <option value="returned">Đã trả</option>
            <option value="notReturned">Chưa trả</option>
          </select>
        </div>
        <div class="mt-4 flex justify-end">
          <button @click="saveBook" class="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition mr-2">
            {{ modalMode === 'add' ? 'Thêm' : 'Cập nhật' }}
          </button>
          <button @click="closeModal" class="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 transition">Đóng</button>
        </div>
      </div>
    </div>

    <!-- Modal xác nhận xóa -->
    <div v-if="isDeleteModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-xl font-bold mb-4">Xác nhận xóa</h2>
        <p>Bạn có chắc chắn muốn xóa thông tin này không?</p>
        <div class="mt-4 flex justify-end">
          <button @click="deleteBook(currentDeleteIndex)" class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition mr-2">Xóa</button>
          <button @click="closeDeleteModal" class="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600 transition">Hủy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const books = ref([]);
const isModalOpen = ref(false);
const newBook = ref({ title: '', student: '', borrowedDate: '', returnDate: '', status: 'notReturned' });
const errors = ref({});
const modalMode = ref('add');
const editIndex = ref(null);

const isDeleteModalOpen = ref(false);
const currentDeleteIndex = ref(null);

const today = ref(new Date().toISOString().split('T')[0]);

const filterStatus = ref('all');

const loadBooksFromLocalStorage = () => {
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    books.value = JSON.parse(storedBooks);
  }
};

const saveBooksToLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books.value));
};

onMounted(() => {
  loadBooksFromLocalStorage();
});

const openModal = (mode, index = null) => {
  modalMode.value = mode;
  isModalOpen.value = true;
  if (mode === 'edit' && index !== null) {
    editIndex.value = index;
    const bookToEdit = books.value[index];
    newBook.value = { ...bookToEdit };
  } else {
    resetNewBook();
  }
};

const closeModal = () => {
  isModalOpen.value = false;
  resetNewBook();
};

const resetNewBook = () => {
  newBook.value = { title: '', student: '', borrowedDate: '', returnDate: '', status: 'notReturned' };
  errors.value = {};
};

const saveBook = () => {
  if (validateForm()) {
    if (modalMode.value === 'add') {
      books.value.push({ ...newBook.value });
    } else if (modalMode.value === 'edit' && editIndex.value !== null) {
      books.value[editIndex.value] = { ...newBook.value };
    }
    saveBooksToLocalStorage();
    closeModal();
  }
};

const confirmDelete = (index) => {
  currentDeleteIndex.value = index;
  isDeleteModalOpen.value = true;
};

const deleteBook = (index) => {
  books.value.splice(index, 1);
  saveBooksToLocalStorage();
  closeDeleteModal();
};

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false;
  currentDeleteIndex.value = null;
};

const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-GB');
};

const filteredBooks = computed(() => {
  if (filterStatus.value === 'all') {
    return books.value;
  } else if (filterStatus.value === 'returned') {
    return books.value.filter((book) => book.status === 'returned');
  } else if (filterStatus.value === 'notReturned') {
    return books.value.filter((book) => book.status === 'notReturned');
  }
});

const validateForm = () => {
  errors.value = {};

  if (!newBook.value.title) {
    errors.value.title = 'Tên sách không được để trống';
  }

  if (!newBook.value.student) {
    errors.value.student = 'Tên sinh viên không được để trống';
  }

  if (!newBook.value.borrowedDate) {
    errors.value.borrowedDate = 'Ngày mượn không được để trống';
  }

  if (!newBook.value.returnDate) {
    errors.value.returnDate = 'Ngày trả không được để trống';
  } else if (newBook.value.returnDate < newBook.value.borrowedDate) {
    errors.value.returnDate = 'Ngày trả phải sau ngày mượn';
  }

  return Object.keys(errors.value).length === 0;
};
</script>

<style scoped>

</style>
