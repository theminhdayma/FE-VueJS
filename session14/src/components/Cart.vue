<template>
    <div class="container mx-auto p-6">
        <div class="flex justify-center">
            <div class="w-full md:w-2/3">
                <div class="bg-white shadow-md rounded-lg p-6">
                    <div class="mb-4">
                        <h2 class="text-xl font-semibold">Item Cart</h2>
                        <div class="flex space-x-4">
                            <span class="font-medium">Billing</span>
                            <span class="font-medium">Payment</span>
                        </div>
                    </div>

                    <table class="min-w-full mb-4">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="py-2 text-left">Product</th>
                                <th class="py-2 text-left">Price</th>
                                <th class="py-2 text-left">Quantity</th>
                                <th class="py-2 text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="py-2 flex items-center">
                                    <img src="https://www.didongmy.com/vnt_upload/news/05_2024/anh-27-meme-dang-yeu-didongmy.jpg" alt="product image" class=" h-20 rounded mr-3" />
                                    <span>Cute Soft Teddybear</span>
                                </td>
                                <td>$200</td>
                                <td>
                                    <input type="number" v-model="quantity" min="1" max="10" class="border rounded p-1 w-20" />
                                </td>
                                <td>$200</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="border-t mt-4 pt-4">
                        <div class="flex justify-between font-semibold">
                            <span>Sub Total</span>
                            <span>$200</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Discount 5%</span>
                            <span>-$10</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Shipping Charges</span>
                            <span>$0</span>
                        </div>
                        <div class="flex justify-between font-bold">
                            <span>Total</span>
                            <span>$190</span>
                        </div>
                    </div>

                    <div class="flex justify-between mt-4">
                        <button class="bg-orange-200 text-orange-600 px-4 py-2 rounded">Continue Shopping</button>
                        <button class="bg-orange-600 text-white px-4 py-2 rounded">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1);
</script>

<style scoped>
/* Add any additional styles here */
</style>