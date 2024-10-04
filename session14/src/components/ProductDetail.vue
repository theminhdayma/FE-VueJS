<template>
    <div class="container mx-auto p-6">
        <div class="flex justify-center">
            <div class="w-full md:w-2/3">
                <div class="bg-white shadow-md rounded-lg p-6">
                    <div class="flex">
                        <div class="w-1/2 pr-4">
                            <img src="https://www.didongmy.com/vnt_upload/news/05_2024/anh-27-meme-dang-yeu-didongmy.jpg" alt="product image" class="rounded" />
                        </div>
                        <div class="w-1/2">
                            <h2 class="text-2xl font-semibold">Cute Soft Teddybear</h2>
                            <p class="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae quisquam, exercitationem possimus ut inventore adipisci aliquam quis quia repudiandae ipsa, aliquid eos nam dicta?
                                <span class="text-gray-500">(15 reviews)</span>
                            </p>
                            <div class="mt-3">
                                <del class="text-red-500">$220</del>
                                <span class="text-xl font-bold text-green-600 ml-2">$200</span>
                            </div>
                            <div class="mt-3">
                                <span class="font-semibold">Color:</span>
                                <div class="flex space-x-2">
                                    <button v-for="color in colors" :key="color" :style="{ backgroundColor: color.value }" class="rounded-full w-8 h-8"></button>
                                </div>
                            </div>
                            <input type="number" v-model="quantity" min="1" max="10" class="border rounded p-1 mt-2 w-20" />
                            <div class="mt-4 flex space-x-2">
                                <button class="bg-orange-200 text-orange-600 px-4 py-2 rounded">Buy Now</button>
                                <button class="bg-blue-200 text-blue-600 px-4 py-2 rounded">Add to Cart</button>
                            </div>
                            <div class="mt-3 text-gray-500">Dispatches in 2-3 weeks</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const quantity = ref(1);
const selectedColor = ref(null);
const colors = reactive([{ value: 'Red' }, { value: 'Blue' }, { value: 'Yellow' }, { value: 'Green' }]);
</script>

<style scoped>
/* Add any additional styles here */
</style>