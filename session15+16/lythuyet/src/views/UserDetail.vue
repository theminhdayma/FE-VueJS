<template>
  <div>
    <h3>Thông tin chi tiết của user</h3>
    <p>UserName {{findUserById()}} </p>
  </div>
</template>

<script setup>
  import {useRoute} from "vue-router"
  const router = useRoute()
  //destrucdoring
  const { id } = router.params
  console.log(router.params);
  
// Danh sách data của user
const users = [
    {
        id: 1,
        name: "Thế Minh",
        age: 19
    },
    {
        id: 2,
        name: "Minh Sâm",
        age: 19
    },
    {
        id: 3,
        name: "Quang",
        age: 19
    },
]

const findUserById = () => {
    return users.find(user=> user.id === +id).name
}
</script>

<style>

</style>