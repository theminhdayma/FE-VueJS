<template>
    <div class="p-6 bg-blue-500 text-white rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Card details</h2>
      <div class="mb-4">
        <label class="block mb-2">Card type</label>
        <div class="flex space-x-2">
          <img src="https://cdn-images.vtv.vn/2019/10/10/photo-1-15706463929181755249740.jpg" alt="Visa" class="w-10" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiu548I2psCHbdoRxVrsgJvz-A-2r9wXZMtQ&s" alt="Mastercard" class="w-10" />
          <img src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg" alt="Paypal" class="w-10" />
        </div>
      </div>
      <div class="mb-4">
        <label class="block mb-2">Cardholder's Name</label>
        <input type="text" class="w-full p-2 rounded-lg bg-white text-gray-900" placeholder="Enter your name" />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Card Number</label>
        <input type="text" class="w-full p-2 rounded-lg bg-white text-gray-900" placeholder="Enter your card number" />
      </div>
      <div class="flex space-x-4">
        <div class="w-1/2">
          <label class="block mb-2">Expiration</label>
          <input type="text" class="w-full p-2 rounded-lg bg-white text-gray-900" placeholder="MM/YY" />
        </div>
        <div class="w-1/2">
          <label class="block mb-2">CVV</label>
          <input type="text" class="w-full p-2 rounded-lg bg-white text-gray-900" placeholder="CVV" />
        </div>
      </div>
      <div class="mt-4">
        <p class="mb-2">Subtotal: ${{ subtotal }}</p>
        <p class="mb-2">Shipping: $20.00</p>
        <p class="text-lg font-semibold">Total(Incl. taxes): ${{ total }}</p>
      </div>
      <button class="mt-4 bg-blue-700 text-white p-2 rounded-lg w-full">
        Checkout → ${{ total }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        subtotal: 4798,
        total: 4818
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add additional styles if needed */
  </style>
  