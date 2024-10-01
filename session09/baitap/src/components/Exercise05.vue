<template>
  <div>
    <h3>giới tính: {{gender}}</h3>
    <ul>
      <li>
        <input type="radio" v-model="gender" value="Nam" />
        <label for="">Nam</label>
      </li>
      <li>
        <input type="radio" v-model="gender" value="Nữ" />
        <label for="">Nữ</label>
      </li>
      <li>
        <input type="radio" v-model="gender" value="Khác" />
        <label for="">Khác</label>
      </li>
    </ul>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    const gender = ref("")
</script>

<style>

</style>