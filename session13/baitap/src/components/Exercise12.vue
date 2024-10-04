<template>
  <div class="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg">
    <h1 class="text-2xl font-bold text-center mb-4">Product List</h1>
    <div class="flex justify-between mb-4">
      <input
        type="text"
        placeholder="Search"
        class="border border-gray-300 rounded-lg p-2 w-2/3"
      />
      <button class="bg-blue-500 text-white rounded-lg px-4 py-2">Add New Item</button>
    </div>

    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 p-2">Product Image</th>
          <th class="border border-gray-300 p-2">Product</th>
          <th class="border border-gray-300 p-2">Date</th>
          <th class="border border-gray-300 p-2">Status</th>
          <th class="border border-gray-300 p-2">Price</th>
          <th class="border border-gray-300 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">
            <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-2.jpg" alt="Curology Face wash" class="w-12 h-12 object-cover" />
          </td>
          <td class="border border-gray-300 p-2">Curology Face wash</td>
          <td class="border border-gray-300 p-2">Thu, Jan 12 2023</td>
          <td class="border border-gray-300 p-2">
            <span class="bg-green-500 text-white px-2 py-1 rounded">In Stock</span>
          </td>
          <td class="border border-gray-300 p-2">$275</td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            <button class="bg-red-500 text-white rounded px-2 py-1">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-2.jpg" alt="Body Lotion" class="w-12 h-12 object-cover" />
          </td>
          <td class="border border-gray-300 p-2">Body Lotion</td>
          <td class="border border-gray-300 p-2">Thu, Jan 20 2023</td>
          <td class="border border-gray-300 p-2">
            <span class="bg-red-500 text-white px-2 py-1 rounded">Out of Stock</span>
          </td>
          <td class="border border-gray-300 p-2">$89</td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            <button class="bg-red-500 text-white rounded px-2 py-1">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-2.jpg" alt="Smart Watch" class="w-12 h-12 object-cover" />
          </td>
          <td class="border border-gray-300 p-2">Smart Watch</td>
          <td class="border border-gray-300 p-2">Fri, Feb 15 2024</td>
          <td class="border border-gray-300 p-2">
            <span class="bg-green-500 text-white px-2 py-1 rounded">In Stock</span>
          </td>
          <td class="border border-gray-300 p-2">$125</td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            <button class="bg-red-500 text-white rounded px-2 py-1">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-2.jpg" alt="Camera" class="w-12 h-12 object-cover" />
          </td>
          <td class="border border-gray-300 p-2">Camera</td>
          <td class="border border-gray-300 p-2">Fri, Mar 30 2024</td>
          <td class="border border-gray-300 p-2">
            <span class="bg-green-500 text-white px-2 py-1 rounded">In Stock</span>
          </td>
          <td class="border border-gray-300 p-2">$200</td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            <button class="bg-red-500 text-white rounded px-2 py-1">Delete</button>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Hinh-nen-ronaldo-cr7-may-tinh-laptop-2.jpg" alt="Games" class="w-12 h-12 object-cover" />
          </td>
          <td class="border border-gray-300 p-2">Games</td>
          <td class="border border-gray-300 p-2">Sat, Mar 30 2024</td>
          <td class="border border-gray-300 p-2">
            <span class="bg-red-500 text-white px-2 py-1 rounded">Out of Stock</span>
          </td>
          <td class="border border-gray-300 p-2">$100</td>
          <td class="border border-gray-300 p-2">
            <button class="bg-yellow-500 text-white rounded px-2 py-1">Edit</button>
            <button class="bg-red-500 text-white rounded px-2 py-1">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

</script>

<style>

</style>
