<template>
  <div>
    <h1>Header</h1>
    <p>giá trị của count: {{store.state.count }} </p>
    <p>Count lấy theo getters: {{store.getters.getCount }}</p>
    <ul>
        <li v-for="todo in store.getters.getAllTodo" v-bind:key="todo.id">
            {{ todo.name }}
        </li>
    </ul>

    <button @click="getDoneTodos">Công việc hoàn thành</button>
    <br><br><br>
    <button @click="increase">Tăng Count {{store.getters.getCount }}</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

    const store = useStore();
    console.log("giá trị của store: ", store.state.count);
    
    const getDoneTodos = () => {
        console.log("Các công việc hoàn thành: ", store.getters.doneTodos); 
    }

    const increase = () => {
        store.commit("increment", {
            amount: 5
        })
    }
</script>

<style>

</style>