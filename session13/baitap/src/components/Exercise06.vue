<template>
<div>
    <v-btn color="primary" @click="dialog = true">Xac nhận</v-btn>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="text-h6 flex justify-between">
            Xác nhận
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            Bạn có xác nhận làm mới dữ liệu không? Nếu có dữ liệu sẽ được cập nhật
          </v-card-text>
        </v-card>
      </v-dialog>
</div>
</template>

<script setup>
import { ref } from 'vue';

const dialog = ref(false);
</script>

<style scoped>
.v-card {
  background-color: #f5f5f5;
}

.v-btn {
  text-transform: none;
}
</style>
