<template>
    <v-container>
      <v-tabs v-model="activeTab" class="">
        <v-tab>Trang chủ</v-tab>
        <v-tab>Giới thiệu</v-tab>
        <v-tab>Liên hệ</v-tab>
      </v-tabs>

      <div class="tab-label">
        <template v-if="activeTab === 0">Tab trang chủ</template>
        <template v-else-if="activeTab === 1">Tab trang giới thiệu</template>
        <template v-else-if="activeTab === 2">Tab trang liên hệ</template>
      </div>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
</script>

<style scoped>
.tab-label {
  margin-top: 20px;
  font-style: italic;
}
</style>
