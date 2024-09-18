<template>
    <div>
      <button @click="openModal" class="px-4 py-2 bg-blue-500 text-white rounded-lg">Open Modal</button>
  
      <!-- Modal component -->
      <Modal v-if="isModalOpen" @close="closeModal" title="My Modal Title">
        <p>This is the content inside the modal!</p>
      </Modal>
    </div>
  </template>
  
  <script>
  import Modal from './Modal.vue';
  
  export default {
    // components: {
    //   Modal,
    // },
    data() {
      return {
        isModalOpen: false,
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional global styles */
  </style>
  