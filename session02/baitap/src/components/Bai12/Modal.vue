<template>
    <!-- Teleport modal content outside of the parent component -->
    <teleport to="body">
      <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-1/3">
          <!-- Modal header -->
          <div class="flex justify-between items-center p-4 border-b">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              <span class="text-xl">×</span>
            </button>
          </div>
          <!-- Modal content -->
          <div class="p-4">
            <slot>
              <!-- Default content if no slot is provided -->
              Modal content
            </slot>
          </div>
          <!-- Modal footer -->
          <div class="flex justify-end p-4 border-t">
            <button @click="closeModal" class="px-4 py-2 bg-gray-500 text-white rounded-lg">
              Close
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Modal title',
      },
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles for animation or customization */
  </style>
  